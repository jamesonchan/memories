import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import LogoImg from "../../images/memories.png";
import { Link } from "react-router-dom";
import React from "react";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const user = null;
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={LogoImg}
          alt="memories"
          height="60"
        />
      </div>
      <Toolbar component={Link} to="/auth" className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt="user.result.name">
              {` user.result.name.charAt(0) `}{" "}
            </Avatar>
            <Typography
              className={classes.userName}
              variant="inherit"
            >{`user.result.name`}</Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
            >
              {" "}
              logout{" "}
            </Button>
          </div>
        ) : (
          <Button variant="contained" color="primary">
            Sign in
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
