import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

interface PostDetailState {
  post: Post | null;
  loading: boolean;
  error: string | null;
}

const initialState: PostDetailState = {
  post: null,
  loading: false,
  error: null,
};

const postDetailReducer = (
  state: PostDetailState = initialState,
  action: PostAction
): PostDetailState => {
  switch (action.type) {
    case PostActionType.POST_DETAIL_REQUEST:
      return { ...state, loading: true };
    case PostActionType.POST_DETAIL_SUCCESS:
      return { ...state, loading: false, post: action.payload };
    case PostActionType.POST_DETAIL_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postDetailReducer;
