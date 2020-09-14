import { Document, Schema, model, Types } from "mongoose";

export interface IAnswer {
  formId: Types.ObjectId,
  answers: {
    inputId: Types.ObjectId,
    answer: string
  }[]
}

export interface IAnswerDocument extends IAnswer, Document {}

const answerSchema = new Schema<IAnswer>({
  formId: {
    type: Schema.Types.ObjectId,
    ref: 'Form',
    required: true
  },
  answers: [
    {
      inputId: {
        type: Schema.Types.ObjectId,
        ref: 'Input',
        required: true
      },
      answer: String
    }
  ]
})

const AnswerModel = model<IAnswerDocument>('Answer', answerSchema);

export default AnswerModel;
