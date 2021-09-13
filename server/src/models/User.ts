import { Document, model, Schema, Types } from "mongoose";

type ID = Types.ObjectId;

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: String,
    username: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    moods: [
      {
        type: Schema.Types.ObjectId,
        ref: "Mood",
      },
    ],
  },
  { timestamps: true }
);

export interface IUser {
  firstName: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
  moods: ID[];
}

interface IUserDoc extends IUser, Document {}

export const User = model<IUserDoc>("User", userSchema);
