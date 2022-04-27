import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

interface PostCreateState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: PostCreateState = {
  success: false,
  loading: false,
  error: null,
};

const postCreateReducer = (
  state: PostCreateState = initialState,
  action: PostAction
): PostCreateState => {
  switch (action.type) {
    case PostActionType.POST_CREATE_REQUEST:
      return { ...state, loading: true };
    case PostActionType.POST_CREATE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PostActionType.POST_CREATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PostActionType.POST_CREATE_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default postCreateReducer;
