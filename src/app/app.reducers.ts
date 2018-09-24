import { RouterState } from "@angular/router";
import { routerReducer } from '@ngrx/router-store';
import * as ar from "./auth/state/auth.reducer";
import { createSelector } from "@ngrx/store";

export interface State {
  router: RouterState,
  auth: ar.AuthState
};

export const reducers = {
  router: routerReducer,
  auth: ar.reducer
};

export const getAuthState = (state: State) => state.auth;
export const isAuthenticated = createSelector(getAuthState, ar.isAuthenticated);
export const getAuthenticatedUser = createSelector(getAuthState, ar.getAuthenticatedUser);
export const isLoading = createSelector(getAuthState, ar.isLoading);
