import { Dispatch } from "react";
import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

export const logout = () => (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch({ type: AuthActionType.AUTH_LOGOUT_REQUEST });
    dispatch({ type: AuthActionType.AUTH_LOGOUT_SUCCESS });
    localStorage.clear();
    dispatch({ type: AuthActionType.AUTH_SIGNIN_RESET });
    dispatch({ type: AuthActionType.AUTH_LOGIN_RESET });
  } catch (error: any) {
    dispatch({ type: AuthActionType.AUTH_LOGOUT_FAIL, payload: error });
  }
};
