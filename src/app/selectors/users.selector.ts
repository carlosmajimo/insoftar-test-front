import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersFeatureKey, UsersState } from '../reducers/users.reducer';

export const getUserState = createFeatureSelector<UsersState>(
  usersFeatureKey
);

export const getUsersListSelector = createSelector(
  getUserState,
  (state: UsersState) => state.users
);
