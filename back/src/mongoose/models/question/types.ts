export enum QuestionContentTypeEnum {
  TEXT,
  IMAGE,
  MUSIC,
}

export interface ContentType {
  type: QuestionContentTypeEnum;
  data: string;
}

export interface AliasType {
  answer: string;
  score: number;
}

export interface QuestionType {
  alias: AliasType[];
  answer: string;
  author: string;
  choices?: string[];
  content?: ContentType;
  data?: string;
  description: string;
  hint?: string;
  score: number;
  time: number;
  title: string;
}
