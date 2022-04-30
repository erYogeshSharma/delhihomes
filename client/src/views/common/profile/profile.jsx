import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Rating, Link, Grid, Button, Chip } from "@mui/material";
import useStyles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../../store/actions/profile";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PinDropIcon from "@mui/icons-material/PinDrop";

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
      <Grid p={1} className={classes.profile_container}>
        <Grid className={classes.profile_img_container}>
          <img className={classes.profile_img} alt=" " src={profile?.profilePhoto} />
        </Grid>
        <Grid mt={1} ml={2} flexGrow={1}>
          <Typography variant="h5">{profile?.user?.name}</Typography>
          <Grid container display="flex" alignItems="center" gap={2}>
            <Rating size="large" name="read-only" value={2.5} readOnly />
            <Typography variant="h6">2.5/5.0</Typography>
          </Grid>
          <Typography variant="body2">{profile?.user?.email}</Typography>
          <Typography variant="body2thin">{profile?.about}</Typography>
        </Grid>
        <Grid display="flex" direction="column" alignItems="flex-start" gap="5px">
          <Chip icon={<LocalPhoneIcon />} label={profile?.mobile} color="success" variant="filled" />
          <Chip icon={<PinDropIcon />} label="Delhi" color="warning" variant="filled" />
        </Grid>
      </Grid>
      <Grid px={2} className={classes.profile_bottom}>
        <Grid flexGrow={1} display="flex" alignItems="center" gap={2}>
          <Typography variant="body1thin" color="text.grey">
            2 Properties
          </Typography>
          <Typography variant="body1thin" color="text.grey">
            10 Reviews
          </Typography>
        </Grid>
        <Grid display="flex" alignItems="center" gap={2}>
          <Grid gap="5px" display="flex" alignItems="center">
            <FacebookIcon sx={{ color: "#fff" }} />
            <Typography color="text.grey" variant="body1thin">
              @dwight_cole
            </Typography>
          </Grid>
          <Grid display="flex" gap="5px" alignItems="center">
            <InstagramIcon sx={{ color: "#fff" }} />
            <Typography color="text.grey" variant="body1thin">
              @dwight_cole
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
