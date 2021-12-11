import mongoose from "mongoose";
const Schema = mongoose.Schema;

const profileSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    about:{
        type:String
    },
    address:{
        type:String,
        required: true,
        minlength: 15,
        maxlength:100
    },
    mobile:{
        type:Number.EPSILON,
        required:true,
        minlength:10,
        maxlength:10
    },
    date:{
        type:Date,
        defaults:Date.now
    }
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;

