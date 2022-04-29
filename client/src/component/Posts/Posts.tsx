import { Grid } from "@material-ui/core";
import React from "react";
import { useAppSelector } from "../../redux/typedReduxHook";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const { posts } = useAppSelector((state) => state.postList);
  const classes = useStyles();

  return (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
