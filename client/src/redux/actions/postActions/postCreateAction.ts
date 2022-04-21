import { Dispatch } from "react";
import agent from "../../../api/agent";
import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

const createPost =
  (newPost: Post) => async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionType.POST_CREATE_REQUEST });

      await agent.Posts.createPosts(newPost);

      dispatch({ type: PostActionType.POST_CREATE_SUCCESS });
    } catch (error: any) {
      dispatch({
        type: PostActionType.POST_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default createPost;
