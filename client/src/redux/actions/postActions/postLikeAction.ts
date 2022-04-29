import { Dispatch } from "react";
import agent from "../../../api/agent";
import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

const likePost =
  (likedPost: Post) => async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionType.POST_LIKE_REQUEST });

      await agent.Posts.likePostById(likedPost);

      dispatch({ type: PostActionType.POST_LIKE_SUCCESS });
    } catch (error: any) {
      dispatch({
        type: PostActionType.POST_LIKE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default likePost;
