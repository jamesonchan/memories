import { Dispatch } from "react";
import agent from "../../../api/agent";
import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";
import { signin } from "./authSigninAction";

export const signup =
  (signupForm: SignUpForm) => async (dispatch: Dispatch<AuthAction>) => {
    try {
      dispatch({ type: AuthActionType.AUTH_SIGNUP_REQUEST });
      await agent.Users.signUp(signupForm);
      dispatch({ type: AuthActionType.AUTH_SIGNUP_SUCCESS });
    } catch (error: any) {
      dispatch({
        type: AuthActionType.AUTH_SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
