import { GoogleLoginResponse } from "react-google-login";
import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

interface AuthLogoutState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialLogoutState: AuthLogoutState = {
  loading: false,
  error: null,
  success: false,
};

const authLogoutReducer = (
  state: AuthLogoutState = initialLogoutState,
  action: AuthAction
): AuthLogoutState => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGOUT_REQUEST:
      return { ...state, loading: true };
    case AuthActionType.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case AuthActionType.AUTH_LOGOUT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default authLogoutReducer;
