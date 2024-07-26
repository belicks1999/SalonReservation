import mongoose from "mongoose";


//user collection
const userSchema = new mongoose.Schema({
  name: String,
  mobile: String, 
  date: Date,
  email:String,
  time: String, 
  completed: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

export default User;
