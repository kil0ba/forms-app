import mongoose, { Document } from 'mongoose';
import { IForm } from "./formModel";
const Schema = mongoose.Schema;


export interface IUser {
  email: string,
  password: string,
  name: string,
  forms: IForm[]
}

export interface IUserDocument extends IUser, Document {}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  forms: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Form'
    }
  ]
});

const UserModel = mongoose.model<IUserDocument>('User', userSchema);

export default UserModel;
