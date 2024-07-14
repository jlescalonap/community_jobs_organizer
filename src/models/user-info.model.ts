import { model, Schema, Document } from 'mongoose';
import { ObjectId } from 'mongodb';
import { UserSchema } from './user.model';
import { Users } from '../types/users';

export interface UserInfoSchema
  extends Omit<Users.Info, 'id' | 'user'>,
    Document {
  _id: ObjectId;
  user: UserSchema;
}

const userInfoSchema = new Schema<UserInfoSchema>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    birthday: {
      type: String,
      default: null,
    },
    company: {
      name: {
        type: String,
        required: false,
      },
      foundationDate: {
        type: Date,
        required: false,
      },
      activity: {
        type: String,
        required: false,
      },
      activityCode: {
        type: String,
        required: false,
      },
      tier: {
        type: String,
        required: false,
      },
      annualRevenues: {
        type: Number,
        required: false,
      },
    },
    address: [
      {
        street: {
          type: String,
          required: false,
        },
        number: {
          type: String,
          required: false,
        },
        neighborhood: {
          type: String,
          required: false,
        },
        complement: {
          type: String,
          required: false,
        },
        city: {
          type: String,
          required: false,
        },
        district: {
          type: String,
          uppercase: true,
          required: false,
        },
        zipCode: {
          type: String,
          required: false,
        },
        AddressCurrentlyInRFSite: { type: Boolean, required: true },
        IsMainForEntity: { type: Boolean, required: true },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export { userInfoSchema };

const UserInfoModel = model<UserInfoSchema>(
  'UserInfo',
  userInfoSchema,
  'UserInfo'
);

export { UserInfoModel };
