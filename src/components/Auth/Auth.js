import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { GOOGLE_ID } from "../../config/constants";
import { googleAuthSuccess } from "../../store/user/actions";

import Input from "./Input";
import Icon from "./Icon";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";

export default function Auth() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  const switchMode = () => {
    setIsSignup(!isSignup);
  };

  const handleChange = (event) => {};

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      const data = { result, token };
      dispatch(googleAuthSuccess(data));
      history.push("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const googleFailure = (error) => {
    console.log("Google sing in error:", error);
    console.log("Google sign in was unsuccessful. Try again.");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isSignup ? "Sign up" : "Login"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              type="password"
            />
            {isSignup && (
              <Input
                type="password"
                name="confirmPassword"
                label="Repeat password"
                handleChange={handleChange}
              />
            )}
          </Grid>
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignup ? "Sign up" : "Login"}
          </Button>{" "}
          <GoogleLogin
            clientId={GOOGLE_ID}
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
                Google sign in
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              {isSignup
                ? "Already have an account? "
                : "Don't have an account yet? "}
              <span
                style={{
                  textDecoration: "underline",
                  fontWeight: "800",
                  cursor: "pointer",
                }}
                onClick={switchMode}
              >
                {isSignup ? "Login" : "Sign up"}
              </span>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}
