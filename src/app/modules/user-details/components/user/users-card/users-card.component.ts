import { Component, Input } from '@angular/core';
import { Router, } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css'],
})
export class UsersCardComponent {
  @Input() user!: User;

  constructor(
    private router: Router,
    private location: Location,
  ) {}

  onUserClick(userId: number) {
    this.router.navigate([`/users/${userId}`]);
    console.log('User clicked: ', userId);
  }

  goBack() {
    this.location.back();
  }
}
