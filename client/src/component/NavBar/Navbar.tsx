import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import LogoImg from "../../images/memories.png";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions/authLogoutAction";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const storageUser =
    JSON.parse(localStorage.getItem("profile") as string) || null;
  const [user, setUser] = useState<AuthData | null>(storageUser);

  const logoutUser = () => {
    if (user) {
      dispatch(logout());
    }
    setUser(null);
  };

  useEffect(() => {
    setUser(storageUser);
  }, [location]);

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
              {user.profileObj.familyName}{" "}
            </Avatar>
            <Typography className={classes.userName} variant="inherit">
              {user.profileObj.name}
            </Typography>
            <Button
              variant="contained"
              className={classes.logout}
              color="secondary"
              onClick={logoutUser}
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
