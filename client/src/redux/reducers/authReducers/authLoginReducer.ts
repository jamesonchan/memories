import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

interface AuthLoginState {
  authData: AuthData | null;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialLoginState: AuthLoginState = {
  authData: null,
  loading: false,
  error: null,
  success: false,
};

const authLoginReducer = (
  state: AuthLoginState = initialLoginState,
  action: AuthAction
): AuthLoginState => {
  switch (action.type) {
    case AuthActionType.AUTH_LOGIN_REQUEST:
      return { ...state, loading: true };
    case AuthActionType.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        authData: action.payload,
      };
    case AuthActionType.AUTH_LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case AuthActionType.AUTH_LOGIN_RESET:
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authLoginReducer;
