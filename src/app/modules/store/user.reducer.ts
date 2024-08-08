import { Action, createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { Users } from 'src/app/core/interfaces/users';

export interface UserState {
  users: Users | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: null,
  loading: false,
  error: null,
};

const _userReducer = createReducer(
  initialState,

  on(loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
    error: null,
  })),

  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
