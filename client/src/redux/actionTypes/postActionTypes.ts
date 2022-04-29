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

  POST_DETAIL_REQUEST = "post_detail_request",
  POST_DETAIL_SUCCESS = "post_detail_success",
  POST_DETAIL_FAIL = "post_detail_fail",
  POST_DETAIL_RESET = "post_detail_reset",

  POST_DELETE_REQUEST = "post_delete_request",
  POST_DELETE_SUCCESS = "post_delete_success",
  POST_DELETE_FAIL = "post_delete_fail",
  POST_DELETE_RESET = "post_delete_reset",

  POST_LIKE_REQUEST = "post_like_request",
  POST_LIKE_SUCCESS = "post_like_success",
  POST_LIKE_FAIL = "post_like_fail",
  POST_LIKE_RESET = "post_like_reset",
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

// view post detail by id
interface PostDetailRequestAction {
  type: PostActionType.POST_DETAIL_REQUEST;
}

interface PostDetailSuccessAction {
  type: PostActionType.POST_DETAIL_SUCCESS;
  payload: Post;
}

interface PostDetailFailAction {
  type: PostActionType.POST_DETAIL_FAIL;
  payload: string;
}

interface PostDetailResetAction {
  type: PostActionType.POST_DETAIL_RESET;
}

// delete post by id
interface PostDeleteRequestAction {
  type: PostActionType.POST_DELETE_REQUEST;
}

interface PostDeleteSuccessAction {
  type: PostActionType.POST_DELETE_SUCCESS;
}

interface PostDeleteFailAction {
  type: PostActionType.POST_DELETE_FAIL;
  payload: string;
}

interface PostDeleteResetAction {
  type: PostActionType.POST_DELETE_RESET;
}

// like post by id
interface PostLikeRequestAction {
  type: PostActionType.POST_LIKE_REQUEST;
}

interface PostLikeSuccessAction {
  type: PostActionType.POST_LIKE_SUCCESS;
}

interface PostLikeFailAction {
  type: PostActionType.POST_LIKE_FAIL;
  payload: string;
}

interface PostLikeResetAction {
  type: PostActionType.POST_LIKE_RESET;
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
  | PostUpdateResetAction
  | PostDetailRequestAction
  | PostDetailSuccessAction
  | PostDetailFailAction
  | PostDetailResetAction
  | PostDeleteRequestAction
  | PostDeleteSuccessAction
  | PostDeleteFailAction
  | PostDeleteResetAction
  | PostLikeRequestAction
  | PostLikeSuccessAction
  | PostLikeFailAction
  | PostLikeResetAction;
