import mongoose, { Schema } from "mongoose";

import { getEnumValues } from "../../../helpers";
import { AliasType, ContentType, QuestionType, QuestionContentTypeEnum } from "./types";

const ContentSchema = new Schema<ContentType>({
  type: { type: Number, required: true, enum: getEnumValues(QuestionContentTypeEnum) },
  data: { type: String, required: true },
});

const AliasSchema = new Schema<AliasType>({
  answer: { type: String, required: true },
  score: { type: Number, required: true },
});

const QuestionSchema = new Schema<QuestionType>({
  author: { type: String, required: true },
  title: { type: String, required: true },
  time: { type: Number, required: true },
  content: { type: ContentSchema, required: false },
  hint: { type: String, required: false },
  choices: { type: [String],  required: false },
  answer: { type: String, required: true },
  score: { type: Number,  required: true },
  alias: { type: [AliasSchema], required: true },
  description: { type: String, required: true },
  data: { type: String, required: false },  
});

export default mongoose.model<QuestionType>("Question", QuestionSchema);
