import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserComponent } from './components/user/user.component';
import { UsersCardComponent } from './components/user/users-card/users-card.component';

@NgModule({
  declarations: [UserComponent, UsersCardComponent],
  imports: [CommonModule, UserDetailsRoutingModule],
})
export class UserDetailsModule {}
