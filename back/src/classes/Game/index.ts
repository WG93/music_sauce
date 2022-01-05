import { Question } from "../../mongoose/models";
import { QuestionType } from "../../mongoose/models/question/types";
import { Time } from "../Engine/types";
import EventEmitter from "../EventEmitter";
import GameData from "./GameData";
import Player from "./Player";
import { FormattedAnswerType, FormattedQuestionType, ModeEnum, RulesType } from "./types";

class Game extends EventEmitter {
  private data: GameData

  constructor(rules: RulesType) {
    super();
    this.data = new GameData(rules);
  }

  public join = (userId: string) => {
    this.data.players.push(new Player(userId, false));

    // ajouter les listeners du socket soit ici soit côté socket

    if (this.data.mode === ModeEnum.WAITING_FOR_LAUNCH) {
      this.data.mode = ModeEnum.LAUNCH;
    }
  }

  public loadedQuestion = (userId: string) => {
    if (this.data.players.every(p => p.loadedNextQuestion)) {
      this.data.mode = ModeEnum.ANSWERING;
    }
  }

  public run = async (time: Time) => {
    if (this.data.mode === ModeEnum.LAUNCH) {
      this.start(time);
    }
    if (this.data.mode === ModeEnum.WAITING_FOR_NEXT) {
      this.launchTimer(time);
    }
  }

  private start = (time: Time) => {
    this.data.mode = ModeEnum.STARTING;
    this.data.time.startedAt = time.current;
    this.getNextQuestion();
  }

  private getNextQuestion = async () => {
    this.data.mode = ModeEnum.WAITING_FOR_NEXT;

    const randomNumber = Math.floor(Math.random() * await Question.count({}));
    const question = await Question.findOne().skip(randomNumber);

    if (question != null) {
      this.data.question = question;
      this.emit("question", this.formatQuestion(question));
    }
  }

  private formatQuestion = (question: QuestionType): FormattedQuestionType => ({
    title: question.title,
    content: question.content,
    hint: question.hint,
    choices: question.choices,
    time: question.time,
  })

  private formatAnswer = (question: QuestionType): FormattedAnswerType => ({
    answer: question.answer,
    data: question.data,
    description: question.description,
    author: question.author,
  })

  private launchTimer = async (time: Time) => {
    this.data.mode = ModeEnum.ANSWERING;
    this.data.time.startedQuestionAt = time.current;
  }
}

export default Game;
