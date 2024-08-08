import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UsersComponent } from './components/users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersCardComponent } from './components/users/users-card/users-card.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { PaginatorModule } from 'primeng/paginator';
@NgModule({
  declarations: [UsersComponent, UsersCardComponent],
  imports: [CommonModule, UserListRoutingModule, SharedModule, ProgressBarModule, PaginatorModule],
})
export class UserListModule {}
