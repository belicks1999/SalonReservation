import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  mobile: String, 
  date: Date,
  time: String, 
  completed: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

export default User;
