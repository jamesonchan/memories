import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

// auth custom signin reducer
interface AuthSigninState {
  signinUser: CustomUser | null;
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialSigninState: AuthSigninState = {
  signinUser: null,
  loading: false,
  error: null,
  success: false,
};

const authSigninReducer = (
  state: AuthSigninState = initialSigninState,
  action: AuthAction
): AuthSigninState => {
  switch (action.type) {
    case AuthActionType.AUTH_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case AuthActionType.AUTH_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        signinUser: action.payload,
      };
    case AuthActionType.AUTH_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case AuthActionType.AUTH_SIGNIN_RESET:
      return { ...state, signinUser: null };
    default:
      return state;
  }
};

export default authSigninReducer;
