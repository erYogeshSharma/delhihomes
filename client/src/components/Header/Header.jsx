import React, { useState, useEffect } from "react";
import * as actionTypes from "../../store/actionTypes";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";
import { AppBar, Box, Toolbar, Typography, Divider, Tooltip, Grid, ListItemIcon, Button, IconButton, Menu, MenuItem, Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "./styles";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import Logout from "@mui/icons-material/Logout";

import Settings from "@mui/icons-material/Settings";

const Header = () => {
  const userData = JSON.parse(localStorage.getItem("profile"));
  const [user, setUser] = useState(null);
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (userData && !user) {
      setUser(userData);
    }
  }, [userData, user]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <AppBar elevation={0} position="fixed" classes={{ root: classes.appbar_root }}>
      <Toolbar>
        <Typography variant="h6" color="Text.subtitle" fontWeight="bold">
          {/* DelhiHomes */}
        </Typography>
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
          <Grid></Grid>
          <Grid>
            {user ? (
              <React.Fragment>
                <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                  <Tooltip title="Account settings">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                      aria-controls={open ? "account-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                    >
                      <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
                        {user?.result.name.charAt(0)}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={() => navigate(`/${auth.user._id}`)}>
                    <Avatar /> My account
                  </MenuItem>
                  <MenuItem>
                    <Avatar>
                      <DashboardCustomizeIcon />
                    </Avatar>
                    Dashboard
                  </MenuItem>
                  <Divider />

                  <MenuItem onClick={() => navigate("/edit-profile")}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={() => logout()}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </React.Fragment>
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
