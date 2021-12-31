import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true,
        minlength: 3,
        maxlength: 30
    },
    googleId:{
        type:String

    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        minlength:8,
        maxlength:100
    },
    date:{
        type:Date,
        default: Date.now
    }
});

const User = mongoose.model("User", userSchema);

export default User;