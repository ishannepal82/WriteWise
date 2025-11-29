import { Schema, model } from "mongoose";
import {IUser} from "../common/interfaces/users";


// 1. Mongoose schema for MongoDB
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// 2. Create Model
const User = model<IUser>("User", userSchema);
export default User;
