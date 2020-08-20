import { Document, Schema, model, Types } from "mongoose";

export interface IInput extends Document {
  name: string,
  formId: Types.ObjectId
}

const inputSchema = new Schema<IInput>({
  name: {
    type: String,
    required: true
  },
  formId: {
    type: Schema.Types.ObjectId,
    ref: 'Form',
    required: true
  }
})

const InputModel = model('Input', inputSchema);

export default InputModel;
