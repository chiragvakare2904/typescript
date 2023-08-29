import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    id : Number,
    name : String,
    age : Number,
    contact : String
});

const User = mongoose.model("user",userSchema);

export default User;