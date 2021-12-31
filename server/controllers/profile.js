import mongoose from 'mongoose';


import Profile from '../models/Profile.js';
import User from '../models/user.js';

import validateProfile from '../validation/profile.js';


export const updateProfile = async (req, res) => {
    const { errors, isValid } = validateProfile(req.body);
    const { id } = req.params;
    console.log(id);
    if (!isValid) {
        return res.status(400).send(errors);

    }


    const userProfile = (req.body);
    const profile = await Profile.findOne({ user: id });
    const googleUser = await User.findOne({ googleId: id });
    console.log(googleUser);

    if (!profile) {

        if (googleUser) {
            
            const newProfile = await new Profile({ ...userProfile, user: id }).save();
            res.status(200).send(newProfile);
        } else {
        
            const newProfile = await new Profile({ ...userProfile, user: id }).save();
            res.status(200).send(newProfile);

        }

    } else {
        await Profile.findByIdAndUpdate(
            profile._id,
            userProfile,
            { new: true }
        )
    }


};

export const getProfile = async (req, res) => {
    const { email } = req.params;
    console.log(email);
    const user = await User.findOne({ email: email })
    
    
    
    
    //check if the user exists
    if (!user) {
        res.status(404).send({ error: "user not found" })

    } else {

        // check if it's a google authenticated user
        if (user.googleId) {
            const profile = await Profile.findOne({ user: user.googleId })
            if (profile == null) {
                const profile = {
                    about: "",
                    address: "",
                    mobile: "",
                    socialMedia: {
                        facebook: "",
                        instagram: ""
                    }

                }
                res.status(200).send({ user, profile });

            } else {
                res.status(200).send({ user, profile });
            }
        } else {

            //check it its our jwt user
            const profile = await Profile.findOne({ user :user.id });
            if (profile == null) {
                const profile = {

                    about: "",
                    address: "",
                    mobile: "",
                    socialMedia: {
                        facebook: "",
                        instagram: ""
                    }
                }
                res.status(200).send({ user, profile });
            } else {
                res.status(200).send({ user, profile });
            };
        }
    }


};
