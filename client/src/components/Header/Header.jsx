import React, { useState, useEffect } from "react";
import * as actionTypes from "../../store/actionTypes";
import { Link, useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { AppBar, CssBaseline, Box, Toolbar, Typography, Tooltip, Grid, Button, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch } from "react-redux";
import useStyles from "./styles";

const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionTypes.LOGOUT });
    navigate("/auth");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar position="fixed" classes={{ root: classes.appbar_root }}>
      <Toolbar>
        <Typography variant="h6" color="Text.subtitle" fontWeight="bold">
          DelhiHomes
        </Typography>
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
          <Grid></Grid>
          <Grid>
            {user ? (
              <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
                  {user?.result.name.charAt(0)}
                </Avatar>
              </div>
            ) : (
              <Button className={classes.nav_btn} onClick={() => navigate("/auth")}>
                Login
              </Button>
            )}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
