import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Link, Grid, Button } from "@mui/material";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../../store/actions/profile";

const Dashboard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  // const userProfile = useSelector((state) => state.userProfile);
  const { loading, profile } = useSelector((state) => state.userProfile);
  console.log(profile);
  console.log(profile.user);

  //check if the viewer is the same user
  //dispatch email
  useEffect(() => {
    dispatch(getProfile(params.id));
  }, []);

  return (
    <Box>
      <Grid>
        <Grid className={classes.profileDetails_container} container spacing={2} direction="column" alignItems="flex-start" justifyContent="center">
          <Grid item>
            <Grid width="400px" container direction="row" alingItems="center" justifyContent="space-between">
              <Grid item className={classes.profile_img_container}>
                <img className={classes.profile_img} src={profile?.profilePhoto} alt="profile" />
              </Grid>
              <Grid item>
                <Grid spacing={1} container direction="column" alignItems="flex-start" justifyContent="space-between">
                  <Grid item>
                    <Button onClick={() => navigate("/edit-profile")} variant="outlined" color="primary">
                      Edit Profile
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="primary">
                      Name
                    </Typography>
                    <Typography variant="body2" color="#fff">
                      {profile?.user?.name}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body1" color="primary">
                      Email
                    </Typography>
                    <Typography variant="body2" color="#fff">
                      {profile?.user?.email}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="primary">
              About
            </Typography>
            <Typography variant="body2" color="#fff">
              {profile?.about}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="primary">
              Address
            </Typography>
            <Typography variant="body2" color="#fff">
              {profile?.address}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="primary">
              Mobile
            </Typography>
            <Typography variant="body2" color="#fff">
              {profile?.mobile}
            </Typography>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center" justifyContent="space-between" width="400px">
              <Grid item lg={6}>
                <Typography variant="body1" color="primary">
                  facebook
                </Typography>
                <Typography variant="body2" color="#fff">
                  {profile?.socialMedia?.facebook}
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography variant="body1" color="primary">
                  Instagram
                </Typography>
                <Typography variant="body2" color="#fff">
                  {profile?.socialMedia?.instagram}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
