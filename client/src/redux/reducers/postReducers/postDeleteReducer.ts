import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

interface PostDeleteState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: PostDeleteState = {
  success: false,
  loading: false,
  error: null,
};

const postDeleteReducer = (
  state: PostDeleteState = initialState,
  action: PostAction
): PostDeleteState => {
  switch (action.type) {
    case PostActionType.POST_DELETE_REQUEST:
      return { ...state, loading: true };
    case PostActionType.POST_DELETE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PostActionType.POST_DELETE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PostActionType.POST_DELETE_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default postDeleteReducer;
