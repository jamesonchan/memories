import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import createPost from "../../redux/actions/postActions/postCreateAction";
import { useAppSelector } from "../../redux/typedReduxHook";
import updatePost from "../../redux/actions/postActions/postUpdateAction";
import loadPostList from "../../redux/actions/postActions/postListAction";
import { PostActionType } from "../../redux/actionTypes/postActionTypes";

const Form = () => {
  const dispatch = useDispatch();
  const initialPost: Post = {
    creator: "",
    title: "",
    message: "",
    tags: [""],
    selectedFile: "",
  };
  const [postData, setPostData] = useState(initialPost);

  const classes = useStyles();

  const { post, loading } = useAppSelector((state) => state.postDetail);
  const { success: successUpdate } = useAppSelector(
    (state) => state.postUpdate
  );
  const { success: successCreate } = useAppSelector(
    (state) => state.postCreate
  );

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  useEffect(() => {
    if (successUpdate || successCreate) {
      dispatch(loadPostList());
      dispatch({ type: PostActionType.POST_UPDATE_RESET });
      dispatch({ type: PostActionType.POST_CREATE_RESET });
    }
  }, [successUpdate, successCreate, dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post) {
      const updatedPost = { ...postData, id: post._id };
      dispatch(updatePost(updatedPost));
    } else {
      dispatch(createPost(postData));
      setPostData(initialPost);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const clear = () => {
    if (post) return;
    else setPostData(initialPost);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={handleChange}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }: any) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
