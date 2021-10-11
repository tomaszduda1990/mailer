import mongoose from 'mongoose';
export interface User {
  _id: mongoose.ObjectId;
  googleId: string;
}
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

export default mongoose.model<User>('users', userSchema);
