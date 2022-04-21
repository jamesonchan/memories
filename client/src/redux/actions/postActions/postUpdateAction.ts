import { Dispatch } from "react";
import agent from "../../../api/agent";
import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

const updatePost =
  (newPost: Post) => async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionType.POST_UPDATE_REQUEST });

      await agent.Posts.updatePosts(newPost);

      dispatch({ type: PostActionType.POST_UPDATE_SUCCESS });
    } catch (error: any) {
      dispatch({
        type: PostActionType.POST_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default updatePost;
