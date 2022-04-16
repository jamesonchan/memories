import { Dispatch } from "react";
import agent from "../../../api/agent";
import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

const loadPostList = () => async (dispatch: Dispatch<PostAction>) => {
  try {
    dispatch({ type: PostActionType.POST_LIST_REQUEST });

    const { data } = await agent.Posts.getPosts();

    dispatch({ type: PostActionType.POST_LIST_SUCCESS, payload: data });
  } catch (error: any) {
    dispatch({
      type: PostActionType.POST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export default loadPostList;
