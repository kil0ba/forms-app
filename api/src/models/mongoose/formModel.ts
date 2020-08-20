import { Document, Schema, model } from "mongoose";
import { IInput } from "./input";

export interface IForm extends Document {
  userId: string,
  formInfo: {
    formName: string,
    formDescription: string
  },
  inputs: IInput[]
}

const formSchema = new Schema<IForm>({
  userId: {
    type: String,
    required: true
  },
  formInfo: {
    formName: {
      type: String,
      required: true
    },
    formDescription: {
      type: String,
      required: true
    }
  },
  inputs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Input'
    }
  ]
})

const FormModel = model<IForm>('Form', formSchema);

export default FormModel;
