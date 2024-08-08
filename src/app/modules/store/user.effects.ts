import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { UsersService } from 'src/app/core/services/users.service';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap((action) =>
        this.usersService.getUsers(action.page).pipe(
          map((users) => loadUsersSuccess({ users })),
          catchError((error) => of(loadUsersFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}
