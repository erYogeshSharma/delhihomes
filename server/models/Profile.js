import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({

    user:{
         type:String
    },
    about:{
        type:String
    },
    profilePhoto:{
      type:String
    },
    address:{
        type:String,
        required: true,
        minlength: 15,
        maxlength:100
    },
    mobile:{
        type:Number,
        required:true,
        minlength:10,
        maxlength:10
    },
    socialMedia: {
        facebook: {
          type: String
        },
       instagram: {
          type: String
        },
       
      },
    date:{
        type:Date,
        defaults:Date.now
    }

});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

