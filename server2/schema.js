import mongoose from "mongoose"
import autoIncrement from 'mongoose-auto-increment';

const newSchema=mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      email: {
          type: String,
          required: true
      },
      userId: {
        type: Number,
        unique: true
    }
})
autoIncrement.initialize(mongoose.connection);
newSchema.plugin(autoIncrement.plugin,  { model: 'student', field: 'userId', startAt: 1, incrementBy: 1 });

const Student=mongoose.model('student',newSchema)
export default Student