import { createAction, props } from '@ngrx/store';
import { Users } from 'src/app/core/interfaces/users';

export const loadUsers = createAction('[User] Load Users', props<{ page: number }>());
export const loadUsersSuccess = createAction(
  '[User] Load Users Success',
  props<{ users: Users }>(),
);
export const loadUsersFailure = createAction(
  '[User] Load Users Failure',
  props<{ error: string }>(),
);
