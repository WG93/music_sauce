import { QuestionType } from "../../mongoose/models/question/types";

export enum ModeEnum {
  WAITING_FOR_LAUNCH,
  LAUNCH,
  STARTING,
  ANSWERING,
  WAITING_FOR_NEXT,
}

export interface FormattedQuestionType {
  title: QuestionType["title"];
  content?: QuestionType["content"];
  hint?: QuestionType["hint"];
  choices?: QuestionType["choices"];
  time: QuestionType["time"];
}

export interface FormattedAnswerType {
  answer: QuestionType["answer"];
  data?: QuestionType["data"];
  description: QuestionType["description"];
  author: QuestionType["author"];
}

export interface GameTimeType {
  startedAt: number;
  startedQuestionAt: number;
}

export interface RulesType {
  maxScore: number;
  time: number;
}
