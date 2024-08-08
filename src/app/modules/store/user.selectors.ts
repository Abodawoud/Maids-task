import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from './user.reducer';

export interface AppState {
  users: UserState;
}

// Select the 'users' feature state
export const selectUserState = createFeatureSelector<AppState, UserState>('users');

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users?.data ?? [],
);

export const selectLoading = createSelector(selectUserState, (state: UserState) => state.loading);

export const selectError = createSelector(selectUserState, (state: UserState) => state.error);

export const selectTotalRecords = createSelector(
  selectUserState,
  (state: UserState) => state.users?.total ?? 0,
);

export const selectCurrentPage = createSelector(
  selectUserState,
  (state: UserState) => state.users?.page ?? 1,
);
