import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

interface PostListState {
  posts: Posts[];
  loading: boolean;
  error: string | null;
}

const initialState: PostListState = {
  posts: [],
  loading: false,
  error: null,
};

const postListReducer = (
  state: PostListState = initialState,
  action: PostAction
): PostListState => {
  switch (action.type) {
    case PostActionType.POST_LIST_REQUEST:
      return { ...state, loading: true };
    case PostActionType.POST_LIST_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case PostActionType.POST_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postListReducer;
