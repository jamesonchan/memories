import {
  Button,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import React, { useEffect } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import viewPostDetail from "../../../redux/actions/postActions/postDetailAction";
import deletePostById from "../../../redux/actions/postActions/postDeleteAction";
import { useAppSelector } from "../../../redux/typedReduxHook";
import { PostActionType } from "../../../redux/actionTypes/postActionTypes";
import loadPostList from "../../../redux/actions/postActions/postListAction";

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { success: successDelete, loading } = useAppSelector(
    (state) => state.postDelete
  );

  const viewDetailById = () => {
    if (post._id) {
      dispatch(viewPostDetail(post._id));
    }
  };

  const deletePost = () => {
    if (post._id) {
      dispatch(deletePostById(post._id));
    }
  };

  useEffect(() => {
    if (successDelete) {
      dispatch(loadPostList());
      dispatch({ type: PostActionType.POST_DELETE_RESET });
    }
  }, [successDelete, dispatch]);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={viewDetailById}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>

      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>

      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>

      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like {``}
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={deletePost}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
