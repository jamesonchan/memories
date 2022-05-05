import { Dispatch } from "react";
import { GoogleLoginResponse } from "react-google-login";
import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

export const login =
  (authData: AuthData) => (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionType.AUTH_LOGIN_REQUEST });
      dispatch({ type: AuthActionType.AUTH_LOGIN_SUCCESS, payload: authData });
      localStorage.setItem("profile", JSON.stringify(authData));
    } catch (error: any) {
      dispatch({ type: AuthActionType.AUTH_LOGIN_FAIL, payload: error });
    }
  };
