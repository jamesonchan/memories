import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

interface PostUpdateState {
  success: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: PostUpdateState = {
  success: false,
  loading: false,
  error: null,
};

const postUpdateReducer = (
  state: PostUpdateState = initialState,
  action: PostAction
): PostUpdateState => {
  switch (action.type) {
    case PostActionType.POST_UPDATE_REQUEST:
      return { ...state, loading: true };
    case PostActionType.POST_UPDATE_SUCCESS:
      return { ...state, loading: false, success: true };
    case PostActionType.POST_UPDATE_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default postUpdateReducer;
