import { TrendingUpRounded } from "@material-ui/icons";
import { type } from "@testing-library/user-event/dist/type";
import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
sensderId:{
    type: mongoose.Schema.ObjectId,
    ref:"User",
    required:true
},
receiverId:{
    type: mongoose.Schema.ObjectId,
    ref:"User",
    required:true
},
message:{
    type:String,
    required:true
}
},{timestamps:true});


module.exports = mongoose.model("Message" , messageSchema    )                           ; 