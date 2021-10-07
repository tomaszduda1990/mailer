import mongoose from 'mongoose';
import { config } from '../config/private';
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoPass);
    console.log('MongoDB connected!');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
