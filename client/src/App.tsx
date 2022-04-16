import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "./component/Form/Form";
import Posts from "./component/Posts/Posts";
import LogoImg from "./images/memories.png";
import loadPostList from "./redux/actions/postActions/postListAction";
import { useAppSelector } from "./redux/typedReduxHook";
import useStyles from "./styles";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { posts } = useAppSelector((state) => state.postList);

  console.log(posts);
  
  useEffect(() => {
    dispatch(loadPostList());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={LogoImg}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
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
    </Container>
  );
}

export default App;
