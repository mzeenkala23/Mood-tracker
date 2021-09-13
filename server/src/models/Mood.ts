import { Document, model, Schema } from "mongoose";

const moodSchema: Schema = new Schema(
  {
    moodType: {
      type: String,
      enum: [0, 1, 2, 3, 4],
      default: 2,
      required: true,
    },
    description: String,
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

enum MoodEnum {
  "Rough day" = 0,
  "Not good" = 1,
  "Not bad" = 2,
  "Good" = 3,
  "Great" = 4,
}

interface IMood {
  moodType: MoodEnum;
  description?: String;
}

interface IMoodDoc extends IMood, Document {}

export const Mood = model<IMoodDoc>("Mood", moodSchema);
