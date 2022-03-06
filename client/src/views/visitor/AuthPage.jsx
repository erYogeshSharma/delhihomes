import React, { useEffect, useState } from "react";
import { Grid, Button, Box, Typography, Link } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { toast, ToastContainer } from "react-toastify";
import useStyles from "./styles";
import "react-toastify/dist/ReactToastify.css";

import { signup, signin, googleLogin } from "../../store/actions/auth";
import Input from "../../components/formElements/Input";
const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "", errors: {} };

const AuthPage = () => {
  const msg = useSelector((state) => state.message.msg);
  const errors = useSelector((state) => state.errors);
  const data = useSelector((state) => state);
  const classes = useStyles();

  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

  useEffect(() => {
    if (msg) {
      toast.success(msg);
    }
    if (errors.error) {
      toast.error(errors.error);
    }
  }, [msg, errors]);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, navigate));
      if (form.length > 0) setIsSignup(false);
    } else {
      dispatch(signin(form, navigate));
    }
  };
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(googleLogin(result, token));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = () => console.log.apply("Google Sign in was unsuccesful. Try again later");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  console.log(initialState);

  return (
    <Box className={classes.login_page}>
      <ToastContainer />
      <Grid height="90vh" container alignItems="center" justifyContent="center">
        <form onSubmit={handleSubmit} className={classes.login_form_image}>
          <Grid className={classes.login_form}>
            <Typography variant="h5" textAlign="center">
              {isSignup ? "Sign up to Delhi Homes" : "Sign in "}
            </Typography>
            {isSignup && (
              <Grid container spacing={2}>
                <Grid item lg={6} sm={12} xs={12}>
                  <Input label="First Name" onChange={handleChange} name="firstName" error={errors.firstName} />
                </Grid>
                <Grid item lg={6} sm={12} xs={12}>
                  <Input label="Last Name" onChange={handleChange} name="lastName" error={errors.lastName} />
                </Grid>
              </Grid>
            )}
            <Input label="Email" onChange={handleChange} name="email" error={errors.email} />
            <Input
              label="Password"
              onChange={handleChange}
              name="password"
              error={errors.password}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                label="Confirm Password"
                onChange={handleChange}
                name="confirmPassword"
                error={errors.confirmPassword}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            )}

            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Button disableElevation variant="contained" size="large" fullWidth onClick={handleSubmit}>
                  {isSignup ? "Sign-Up" : "Sign In"}
                </Button>
              </Grid>
              <Grid item>
                <GoogleLogin
                  clientId="907428189436-v0j01nvq3soe7j5nc6t3ut8iuk959dra.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      disableElevation
                      color="danger"
                      size="large"
                      variant="contained"
                      fullWidth
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Login with Google
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleError}
                  cookiePolicy="single_host_origin"
                />
              </Grid>
            </Grid>
            <Typography mt={1} mb={2} variant="body2">
              <Link color="#000" onClick={switchMode}>
                {isSignup ? "Already have a account? Sign in" : "Don't have a account Sign Up"}
              </Link>
            </Typography>
          </Grid>
        </form>
      </Grid>
    </Box>
  );
};

export default AuthPage;
