import { Document, Schema, model, Types } from "mongoose";

export interface IInput {
  name: string,
  formId: Types.ObjectId
}

export interface IInputDocument extends IInput, Document {}

const inputSchema = new Schema<IInput>({
  name: {
    type: String,
    required: true
  },
  formId: {
    type: Schema.Types.ObjectId,
    ref: 'Form',
    required: true
  },
  required: {
    type: Boolean,
    default: false
  }
})

const InputModel = model<IInputDocument>('Input', inputSchema);

export default InputModel;
