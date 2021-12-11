import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        required:true,
        minlength:5,
        maxlength:30
    },
    imgUrl:{
        type:String,
        required:true,
        default:"http://placehold.jp/300*250.png"
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true,
        minlength:15,
        maxlength:300,
    },
    address:{
        type:String,
        required:true,
        minlength:20,
        maxlength:150
    },
    state:{
        type:String,
        required:true,
        minlength:10,
        maxlength:30
    },
    city:{
        type:String,
        required:true,
        minlength:10,
        maxlength:30

    },
    Zip:{
        type:Number,
        required:true
    },
    propertyType:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    bedroom:{
        type:Number,
        required: true
    },
    bathroom:{
        type:Number,
        required:true
    },
    area:{
        type:Number,
        required:true
    },
    features:{
        ac: {type:Boolean, default:false},
        internet: {type:Boolean, default:false},
        parking: {type:Boolean, default:false},
        gym: {type:Boolean, default:false},
        tv: {type:Boolean, default:false},
        library: {type:Boolean, default:false}
        
    },
    date:{
        type:Date,
        default: Date.now
    }
   
});

const Property = mongoose.model("property", propertySchema);

export default Property;
