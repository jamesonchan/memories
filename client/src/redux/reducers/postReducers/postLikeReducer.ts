import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

interface PostLikeState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: PostLikeState = {
  success: false,
  loading: false,
  error: null,
};

const postLikeReducer = (
  state: PostLikeState = initialState,
  action: PostAction
): PostLikeState => {
  switch (action.type) {
    case PostActionType.POST_LIKE_REQUEST:
      return { ...state, loading: true };
    case PostActionType.POST_LIKE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PostActionType.POST_LIKE_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PostActionType.POST_LIKE_RESET:
      return { ...state, success: false };
    default:
      return state;
  }
};

export default postLikeReducer;
