import { createAction, props } from '@ngrx/store';
import {AuthState} from '../reducers/auth.reducer';

export const Login = createAction(
  '[Auth] Login User',
  props<AuthState>()
);
