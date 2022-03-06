import mongoose from "mongoose";
import Profile from "../models/Profile.js";
import User from "../models/user.js";
import validateProfile from "../validation/profile.js";

export const updateProfile = async (req, res) => {
  const { errors, isValid } = validateProfile(req.body);
  const { id } = req.params;
  console.log(id);
  if (!isValid) {
    return res.status(400).send(errors);
  }

  const profileDetails = req.body;
  const profile = await Profile.findOne({
    user: mongoose.Types.ObjectId(id),
  });
  if (!profile) {
    const newProfile = await new Profile(profileDetails).save();
    res.status(200).send(newProfile);
  } else {
    const updateUser = await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
    });
    const newProfile = await Profile.findOneAndUpdate({ user: mongoose.Types.ObjectId(id) }, { $set: profileDetails }, { new: true }).populate(
      "user",
      ["-password"]
    );
    res.status(200).send(newProfile);
  }
};

export const getProfile = async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    const profile = await Profile.findOne({
      user: mongoose.Types.ObjectId(req.params.id),
    }).populate("user", ["-password"]);

    if (profile === null) {
      let userDetail = await User.find({ _id: req.params.id }).select(["-password"]);

      if (userDetail.length) {
        const profile = {
          user: {
            name: userDetail[0].name,
            email: userDetail[0].email,
            _id: userDetail[0]._id,
          },
          address: "",
          about: "",
          mobile: "",
          socialMedia: {
            facebook: "www.facebook.com",
            instagram: "www.instagram.com",
          },
        };
        res.status(200).send(profile);
      } else {
        res.status(400).send("User Does not Exists");
      }
    } else {
      res.status(200).send(profile);
    }
  } else {
    res.status(400).send("Not Found");
  }
};
