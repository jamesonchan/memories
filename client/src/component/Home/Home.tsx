import { Grow, Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import loadPostList from "../../redux/actions/postActions/postListAction";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(loadPostList());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          className={classes.gridContainer}
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
