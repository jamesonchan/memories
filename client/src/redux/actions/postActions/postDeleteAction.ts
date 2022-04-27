import { Dispatch } from "react";
import agent from "../../../api/agent";
import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

const deletePostById =
  (selectedPostId: string) => async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionType.POST_DELETE_REQUEST });

      await agent.Posts.deletePostById(selectedPostId);

      dispatch({ type: PostActionType.POST_DELETE_SUCCESS });
    } catch (error: any) {
      dispatch({
        type: PostActionType.POST_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default deletePostById;
