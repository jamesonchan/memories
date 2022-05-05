import { Dispatch } from "react";
import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

export const logout = () => (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch({ type: AuthActionType.AUTH_LOGOUT_REQUEST });
    dispatch({ type: AuthActionType.AUTH_LOGOUT_SUCCESS });
    localStorage.clear();
  } catch (error: any) {
    dispatch({ type: AuthActionType.AUTH_LOGOUT_FAIL, payload: error });
  }
};
