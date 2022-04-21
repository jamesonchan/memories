export enum PostActionType {
  POST_LIST_REQUEST = "post_list_request",
  POST_LIST_SUCCESS = "post_list_success",
  POST_LIST_FAIL = "post_list_fail",

  POST_CREATE_REQUEST = "post_create_request",
  POST_CREATE_SUCCESS = "post_create_success",
  POST_CREATE_FAIL = "post_create_fail",
  POST_CREATE_RESET = "post_create_reset",

  POST_UPDATE_REQUEST = "post_update_request",
  POST_UPDATE_SUCCESS = "post_update_success",
  POST_UPDATE_FAIL = "post_update_fail",
  POST_UPDATE_RESET = "post_update_reset",
}

// get posts list actions
interface PostListRequestAction {
  type: PostActionType.POST_LIST_REQUEST;
}

interface PostListSuccessAction {
  type: PostActionType.POST_LIST_SUCCESS;
  payload: Post[];
}

interface PostListFailAction {
  type: PostActionType.POST_LIST_FAIL;
  payload: string;
}

// create post actions
interface PostCreateRequestAction {
  type: PostActionType.POST_CREATE_REQUEST;
}

interface PostCreateSuccessAction {
  type: PostActionType.POST_CREATE_SUCCESS;
}

interface PostCreateFailAction {
  type: PostActionType.POST_CREATE_FAIL;
  payload: string;
}

interface PostCreateResetAction {
  type: PostActionType.POST_CREATE_RESET;
}

// update post actions
interface PostUpdateRequestAction {
  type: PostActionType.POST_UPDATE_REQUEST;
}

interface PostUpdateSuccessAction {
  type: PostActionType.POST_UPDATE_SUCCESS;
}

interface PostUpdateFailAction {
  type: PostActionType.POST_UPDATE_FAIL;
  payload: string;
}

interface PostUpdateResetAction {
  type: PostActionType.POST_UPDATE_RESET;
}

export type PostAction =
  | PostListRequestAction
  | PostListSuccessAction
  | PostListFailAction
  | PostCreateRequestAction
  | PostCreateSuccessAction
  | PostCreateFailAction
  | PostCreateResetAction
  | PostUpdateRequestAction
  | PostUpdateSuccessAction
  | PostUpdateFailAction
  | PostUpdateResetAction;
