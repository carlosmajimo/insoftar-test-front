import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';


export const authFeatureKey = 'auth';

export interface AuthState {
  user: any;
  token?: string;
}

export const initialState: AuthState = {
  user: null,
  token: null
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.Login, (state, data) => ({...data}))
);

export function reducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
