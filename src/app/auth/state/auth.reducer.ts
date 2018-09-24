import { CognitoUser } from "amazon-cognito-identity-js";
import { Actions, LOGIN_USER, LOGIN_USER_SUCCESS, LoginUserSuccessAction, LOGIN_USER_ERROR, LoginUserErrorAction, LOGOUT_USER, LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR } from "./auth.action";

export interface AuthState {
  LoggedIn: boolean;
  LoggingIn: boolean;
  LoggingOut: boolean;
  CurrentUser?: CognitoUser;
  AccessToken?: string;
  IdToken?: string;
}

const initialState: AuthState = {
  LoggedIn: false,
  LoggingIn: false,
  LoggingOut: false,
  CurrentUser: null,
  AccessToken: null,
  IdToken: null
};

export function reducer(state: AuthState = initialState, action: Actions): AuthState {
  switch(action.type) {
    case LOGIN_USER:
      return {...state, LoggingIn: true};
    case LOGIN_USER_SUCCESS:
      const sa = action as LoginUserSuccessAction;
      return {
        ...state,
        LoggingIn: false,
        LoggedIn: true,
        CurrentUser: sa.payload.user,
        AccessToken: sa.payload.accessToken,
        IdToken: sa.payload.idToken
      };
    case LOGIN_USER_ERROR:
      const ea = action as LoginUserErrorAction;
      return {
        ...state,
        LoggingIn: false,
        LoggedIn: false,
        CurrentUser: null,
        AccessToken: null,
        IdToken: null
      };
    case LOGOUT_USER:
      return {
        ...state,
        LoggingOut: true
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        LoggedIn: false,
        LoggingOut: false,
        CurrentUser: null,
        AccessToken: null,
        IdToken: null
      }
    case LOGOUT_USER_ERROR:
      return {
        ...state,
        LoggingOut: false
      };
    default: return state;
  }
}

export const isAuthenticated = (state: AuthState) => state.LoggedIn;
export const getAuthenticatedUser = (state: AuthState) => state.CurrentUser;
export const isLoading = (state: AuthState) => state.LoggingIn || state.LoggingOut;
