import React, { useEffect, useState } from "react";
import { Box, Grid, Button, InputFeild } from "@mui/material";
import FileBase from "react-file-base64";

import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../../components/formElements/Input";
import { getProfile, updateProfile } from "../../../store/actions/profile";
import useStyles from "./styles";

const EditProfile = () => {
  const form = { user: "", name: "", about: "", profilePhoto: "", mobile: "", socialMedia: { facebook: "", instagram: "" } };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(form);
  const classes = useStyles();
  const { auth, errors, userProfile } = useSelector((state) => state);
  console.log(userProfile.profile);

  useEffect(() => {
    dispatch(getProfile(auth.user._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!userProfile.loading) {
      setProfile({
        ...profile,
        user: userProfile.profile.user._id,
        name: userProfile.profile.user.name,
        about: userProfile.profile.about,
        address: userProfile.profile.address,
        mobile: userProfile.profile.mobile.toString(),
        socialMedia: userProfile.profile.socialMedia,
        profilePhoto: userProfile.profile.profilePhoto || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userProfile.profile]);

  console.log(typeof profile.profilePhoto);
  const handleChange = (e) => {
    if (e.target.name === "facebook" || e.target.name === "instagram") {
      setProfile((prevState) => ({
        ...prevState,
        socialMedia: { ...prevState.socialMedia, [e.target.name]: e.target.value },
      }));
    } else {
      setProfile({ ...profile, [e.target.name]: e.target.value });
    }
  };
  console.log(profile);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(auth.user._id, profile, navigate));
  };

  return (
    <Box className={classes.edit_page}>
      <Grid className={classes.edit_form_container}>
        <form onSubmit={handleSubmit}>
          <Grid mb={2} container direction="row" alignItems="center" justifyContent="flex-start">
            <Grid item className={classes.img_container}>
              <img
                className={classes.profile_image}
                src={profile.profilePhoto ? profile.profilePhoto : "https://picsum.photos/200/200"}
                alt="profile"
              />
            </Grid>
            <Grid ml={2} item>
              <FileBase type="file" multipe={false} onDone={({ base64 }) => setProfile({ ...profile, profilePhoto: base64 })} />
            </Grid>
          </Grid>

          <Input label="Name" onChange={handleChange} name="name" value={profile.name} error={errors?.name} />
          <Input label="About" onChange={handleChange} name="about" value={profile.about} error={errors?.about} />
          <Grid>
            <Input label="Address" onChange={handleChange} name="address" value={profile.address} error={errors?.address} />
          </Grid>
          <Grid spacing={1} container direction="row">
            <Grid item lg={6} xs={12}>
              <Input label="mobile" onChange={handleChange} name="mobile" value={profile.mobile} error={errors?.mobile} />
            </Grid>
            <Grid item lg={6} xs={12}></Grid>
            <Grid item lg={6} xs={12}>
              <Input label="facebook" onChange={handleChange} name="facebook" value={profile.socialMedia.facebook} error={errors?.facebook} />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Input label="instagram" onChange={handleChange} name="instagram" value={profile.socialMedia.instagram} error={errors?.instagram} />
            </Grid>
          </Grid>
          <Button fullWidth variant="contained" color="danger" onClick={handleSubmit}>
            Update
          </Button>
        </form>
      </Grid>
    </Box>
  );
};

export default EditProfile;
