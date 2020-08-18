import mongoose, { Document } from 'mongoose';
const Schema = mongoose.Schema;


export interface IUser extends Document {
  email: string,
  password: string,
  name: string,
  forms: any[]
}

const userSchema = new Schema({
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
      type: Schema.Types.ObjectId
    }
  ]
});

export default mongoose.model<IUser>('User', userSchema);
