import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { Users } from 'src/app/core/interfaces/users';
import { UsersService } from 'src/app/core/services/users.service';
import { loadUsers } from 'src/app/modules/store/user.actions';
import {
  selectAllUsers,
  selectLoading,
  selectError,
  selectTotalRecords,
  selectCurrentPage,
  AppState,
} from 'src/app/modules/store/user.selectors';

interface PageEvent {
  first?: number;
  rows?: number;
  page?: number;
  pageCount?: number;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users$!: Observable<User[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;
  totalRecords$!: Observable<number>;
  currentPage$!: Observable<number>;
  filteredUser$!: Observable<User | null>;

  first: number = 0;
  rows: number = 6;
  searchId: number | null = null;

  constructor(
    private store: Store<AppState>,
    private usersService: UsersService,
  ) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
    this.totalRecords$ = this.store.select(selectTotalRecords);
    this.currentPage$ = this.store.select(selectCurrentPage);

    this.filteredUser$ = of(null); // Initialize with null
  }

  ngOnInit(): void {
    this.loadUsers(1);
  }

  loadUsers(page: number) {
    this.store.dispatch(loadUsers({ page }));
  }

  onPageChange(event: PageEvent) {
    const page = (event.page ?? 0) + 1;
    this.loadUsers(page);
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 10;
  }

  onSearch(searchId: number) {
    this.searchId = searchId;
    if (this.searchId === null || this.searchId === undefined) {
      this.filteredUser$ = of(null);
      this.loadUsers(1);
    } else {
      this.filteredUser$ = this.usersService.getUserById(this.searchId);
    }
  }
}
