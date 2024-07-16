// user.mode.ts

// Modules
import mongoose, { ObjectId, Schema } from 'mongoose';

// Types
import { Users } from '../types/users.type';

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
