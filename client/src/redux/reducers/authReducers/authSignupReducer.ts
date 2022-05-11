import { AuthAction, AuthActionType } from "../../actionTypes/authActionTypes";

// auth custom signin reducer
interface AuthSignupState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialSignupState: AuthSignupState = {
  loading: false,
  error: null,
  success: false,
};

const authSignupReducer = (
  state: AuthSignupState = initialSignupState,
  action: AuthAction
): AuthSignupState => {
  switch (action.type) {
    case AuthActionType.AUTH_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case AuthActionType.AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        
      };
    case AuthActionType.AUTH_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };
    case AuthActionType.AUTH_SIGNIN_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default authSignupReducer;
