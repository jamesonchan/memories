import { Dispatch } from "react";
import agent from "../../../api/agent";
import { PostAction, PostActionType } from "../../actionTypes/postActionTypes";

const viewPostDetail =
  (selectedPostId: string) => async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: PostActionType.POST_DETAIL_REQUEST });

      const { data } = await agent.Posts.getPostById(selectedPostId);

      dispatch({ type: PostActionType.POST_DETAIL_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: PostActionType.POST_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export default viewPostDetail;
