import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import LogoImg from "../../images/memories.png";
import { logout } from "../../redux/actions/authActions/authLogoutAction";
import { useAppSelector } from "../../redux/typedReduxHook";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { signinUser: customUser } = useAppSelector(
    (state) => state.authSignin
  );

  const { authData: googleUser } = useAppSelector((state) => state.authLogin);

  const logoutUser = () => {
    if (customUser || googleUser) {
      dispatch(logout());
    }
  };

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
        {customUser || googleUser ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt="user.result.name">
              {customUser
                ? customUser.result.name
                : googleUser
                ? googleUser.profileObj.familyName
                : null}{" "}
            </Avatar>
            <Typography className={classes.userName} variant="inherit">
              {customUser
                ? customUser.result.name
                : googleUser
                ? googleUser.profileObj.name
                : null}
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
