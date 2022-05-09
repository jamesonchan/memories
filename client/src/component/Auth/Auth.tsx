import {
  Avatar,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import Input from "./Input";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import useStyles from "./styles";
import Icon from "./Icon";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions/authActions/authLoginAction";
import { useAppSelector } from "../../redux/typedReduxHook";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassowrd, setShowPassowrd] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialFormState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // actions to be implemented
    if (isSignup) {
      
    } else {
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleShowPassword = () =>
    setShowPassowrd((showPassword) => !showPassword);

  const switchMode = () => {
    setIsSignup((isSignup) => !isSignup);
    setShowPassowrd(false);
  };

  const googleSuccess = async (res: GoogleLoginResponse) => {
    const profileObj = res.profileObj;
    const token = res.tokenId;
    const authData = { profileObj, token };

    dispatch(login(authData));
    navigate("/");
  };

  const googleFailure = () => {
    console.log("Google sign in was unsuccessful");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange as any}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange as any}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange as any}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange as any}
              type={showPassowrd ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange as any}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            clientId="395964187815-jthb9dicrae410qf1oi1scr0aul9oqeg.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess as any}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
