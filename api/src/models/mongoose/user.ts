const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
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

export default mongoose.model('User', userSchema);