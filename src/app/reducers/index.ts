import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from './auth.reducer';
import * as fromUsers from './users.reducer';


export interface State {

  [fromAuth.authFeatureKey]: fromAuth.AuthState;
  [fromUsers.usersFeatureKey]: fromUsers.UsersState;
}

export const reducers: ActionReducerMap<State> = {

  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromUsers.usersFeatureKey]: fromUsers.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
