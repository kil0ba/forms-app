import mongoose, { Document } from 'mongoose';
import { IForm } from "./formModel";
const Schema = mongoose.Schema;


export interface IUser extends Document {
  email: string,
  password: string,
  name: string,
  forms: IForm[]
}

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

export default mongoose.model<IUser>('User', userSchema);
