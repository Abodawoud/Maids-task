import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { UsersService } from 'src/app/core/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user!: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
  ) {}

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    console.log('User ID: ', userId);

    this.userService.getUserById(userId).subscribe((user) => {
      this.user = user;
      console.log('User: ', this.user);
    });
  }
}
