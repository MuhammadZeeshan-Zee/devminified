import mongoose from 'mongoose';
import Counter from './countermodel.js'; // Make sure to adjust the import path accordingly

// Define the user schema
const userSchema = new mongoose.Schema({
  firstname: {
       type: String,
       required: true,
   },
   lastname: {
       type: String,
       required: true,
   },
   email: {
       type: String,
       required: true,
   },
   phonenumber: {
       type: String,
       required: true
   },
   userId: {
       type: Number,
       unique: true
   }
});

// Pre-save middleware to auto-increment userId
userSchema.pre('save', async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: 'userId' },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    this.userId = counter.seq;
  }
  next();
});

// Turn the schema into a model
const User = mongoose.model('User', userSchema);

export default User;