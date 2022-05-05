import { GoogleLoginResponse } from "react-google-login";

export enum AuthActionType {
  AUTH_LOGIN_REQUEST = "auth_login_request",
  AUTH_LOGIN_SUCCESS = "auth_login_success",
  AUTH_LOGIN_FAIL = "auth_login_fail",

  AUTH_LOGOUT_REQUEST = "auth_logout_request",
  AUTH_LOGOUT_SUCCESS = "auth_logout_success",
  AUTH_LOGOUT_FAIL = "auth_logout_fail",
}

// auth login actions
interface AuthLoginRequestAction {
  type: AuthActionType.AUTH_LOGIN_REQUEST;
}

interface AuthLoginSuccessAction {
  type: AuthActionType.AUTH_LOGIN_SUCCESS;
  payload: AuthData;
}

interface AuthLoginFailAction {
  type: AuthActionType.AUTH_LOGIN_FAIL;
  payload: string;
}

// auth logout actions
interface AuthLogoutRequestAction {
  type: AuthActionType.AUTH_LOGOUT_REQUEST;
}

interface AuthLogoutSuccessAction {
  type: AuthActionType.AUTH_LOGOUT_SUCCESS;
}

interface AuthLogoutFailAction {
  type: AuthActionType.AUTH_LOGOUT_FAIL;
  payload: string;
}

export type AuthAction =
  | AuthLoginRequestAction
  | AuthLoginSuccessAction
  | AuthLoginFailAction
  | AuthLogoutRequestAction
  | AuthLogoutSuccessAction
  | AuthLogoutFailAction;
