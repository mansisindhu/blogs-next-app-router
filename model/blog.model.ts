import type { Model } from "mongoose";
import mongoose, { model } from "mongoose";

interface Blog {
  title: string;
  cotent: string;
}

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default (mongoose.models.Blog || model<Blog>("Blog", BlogSchema)) as Model<Blog>;
