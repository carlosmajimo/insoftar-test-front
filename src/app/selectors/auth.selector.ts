import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthState } from '../reducers/auth.reducer';

export const getAuthState = createFeatureSelector<AuthState>(
  authFeatureKey
);

export const getUserSelector = createSelector(
  getAuthState,
  (state: AuthState) => state.user
);

export const getTokenSelector = createSelector(
  getAuthState,
  (state: AuthState) => state.token
);
