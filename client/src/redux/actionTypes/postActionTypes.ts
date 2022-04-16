export enum PostActionType {
  POST_LIST_REQUEST = "post_list_request",
  POST_LIST_SUCCESS = "post_list_success",
  POST_LIST_FAIL = "post_list_fail",
}

// get posts list actions
interface PostListRequestAction {
  type: PostActionType.POST_LIST_REQUEST;
}

interface PostListSuccessAction {
  type: PostActionType.POST_LIST_SUCCESS;
  payload: Posts[];
}

interface PostListFailAction {
  type: PostActionType.POST_LIST_FAIL;
  payload: string;
}

export type PostAction =
  | PostListRequestAction
  | PostListSuccessAction
  | PostListFailAction;
