import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';


export const usersFeatureKey = 'users';

export interface UsersState {
  users: Array<any>
}

export const initialState: UsersState = {
  users: []
};

const usersReducer = createReducer(
  initialState,
  on(UsersActions.SetUsers, (state, {users}) => ({users}))
);

export function reducer(state: UsersState | undefined, action: Action) {
  return usersReducer(state, action);
}
