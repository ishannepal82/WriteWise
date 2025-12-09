import { Document } from "mongoose";

// User Interface for type Saftey at CompileTime
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}