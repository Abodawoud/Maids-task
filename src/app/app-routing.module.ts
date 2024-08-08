import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user-list/user-list.module').then((m) => m.UserListModule),
  },
  {
    path: 'users/:id',
    loadChildren: () =>
      import('./modules/user-details/user-details.module').then((m) => m.UserDetailsModule),
  },
  {
    path: '**',
    redirectTo: 'users',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
