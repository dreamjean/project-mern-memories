import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import authActions from "../../actions/auth";
import { AUTH } from "../../constants/actionTypes";
import keys from "../../constants/keys";
import Icon from "./icon";
import Input from "./Input";
import useStyles from "./styles";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(authActions.signup(formData, history));
    } else {
      dispatch(authActions.signin(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful");
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} exevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  onChange={handleChange}
                  // eslint-disable-next-line jsx-a11y/no-autofocus
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  onChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="email Adress"
              onChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              onShowPassword={() => setShowPassword((prev) => !prev)}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                onChange={handleChange}
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
            clientId={keys.GOOGLE_ID}
            render={(rednderProps) => (
              <Button
                className={classes.googleButton}
                color="secondary"
                fullWidth
                onClick={rednderProps.onClick}
                disabled={rednderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />

          <Grid container justify="flex-end">
            <Grid item>
              <Button
                onClick={() => {
                  setIsSignup((prev) => !prev);
                  setShowPassword(false);
                }}
              >
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
