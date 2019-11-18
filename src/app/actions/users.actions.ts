import { createAction, props } from '@ngrx/store';
import { UsersState } from '../reducers/users.reducer';

export const SetUsers = createAction(
  '[Users] Set Users',
  props<UsersState>()
);




