// user.mode.ts

// Modules
import mongoose, { ObjectId } from 'mongoose';
import { Users } from '../types/users';

const Schema = mongoose.Schema;

export interface UserSchema extends Omit<Users.User, 'id'>, Document {
  _id: ObjectId;
}

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      strim: true,
    },
    email: {
      unique: true,
      type: String,
      require: true,
      strim: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('User', UserSchema);
