import { Dispatch } from "react";
import agent from "../../../api/agent";
import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

export const signin =
  (signinForm: SignInForm) => async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionType.AUTH_SIGNIN_REQUEST });
      const { data } = await agent.Users.signIn(signinForm);
      dispatch({ type: AuthActionType.AUTH_SIGNIN_SUCCESS, payload: data });
      localStorage.setItem("profile", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: AuthActionType.AUTH_SIGNIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
