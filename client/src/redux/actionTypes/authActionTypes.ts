import { GoogleLoginResponse } from "react-google-login";

export enum AuthActionType {
  AUTH_LOGIN_REQUEST = "auth_login_request",
  AUTH_LOGIN_SUCCESS = "auth_login_success",
  AUTH_LOGIN_FAIL = "auth_login_fail",
  AUTH_LOGIN_RESET = "auth_login_reset",

  AUTH_LOGOUT_REQUEST = "auth_logout_request",
  AUTH_LOGOUT_SUCCESS = "auth_logout_success",
  AUTH_LOGOUT_FAIL = "auth_logout_fail",

  AUTH_SIGNIN_REQUEST = "auth_signin_request",
  AUTH_SIGNIN_SUCCESS = "auth_signin_success",
  AUTH_SIGNIN_FAIL = "auth_signin_fail",
  AUTH_SIGNIN_RESET = "auth_signin_reset",

  AUTH_SIGNUP_REQUEST = "auth_signup_request",
  AUTH_SIGNUP_SUCCESS = "auth_signup_success",
  AUTH_SIGNUP_FAIL = "auth_signup_fail",
  AUTH_SIGNUP_RESET = "auth_signup_reset",
}

// auth google login actions
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

interface AuthLoginResetAction {
  type: AuthActionType.AUTH_LOGIN_RESET;
}

// auth google logout actions
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

// auth custom signin actions
interface AuthSigninRequestAction {
  type: AuthActionType.AUTH_SIGNIN_REQUEST;
}

interface AuthSigninSuccessAction {
  type: AuthActionType.AUTH_SIGNIN_SUCCESS;
  payload: CustomUser;
}

interface AuthSigninFailAction {
  type: AuthActionType.AUTH_SIGNIN_FAIL;
  payload: string;
}

interface AuthSigninResetAction {
  type: AuthActionType.AUTH_SIGNIN_RESET;
}

// auth custom signup actions
interface AuthSignupRequestAction {
  type: AuthActionType.AUTH_SIGNUP_REQUEST;
}

interface AuthSignupSuccessAction {
  type: AuthActionType.AUTH_SIGNUP_SUCCESS;
}

interface AuthSignupFailAction {
  type: AuthActionType.AUTH_SIGNUP_FAIL;
  payload: string;
}

interface AuthSignupResetAction {
  type: AuthActionType.AUTH_SIGNUP_RESET;
}

export type AuthAction =
  | AuthLoginRequestAction
  | AuthLoginSuccessAction
  | AuthLoginFailAction
  | AuthLoginResetAction
  | AuthLogoutRequestAction
  | AuthLogoutSuccessAction
  | AuthLogoutFailAction
  | AuthSigninRequestAction
  | AuthSigninSuccessAction
  | AuthSigninFailAction
  | AuthSigninResetAction
  | AuthSignupRequestAction
  | AuthSignupSuccessAction
  | AuthSignupFailAction
  | AuthSignupResetAction;
