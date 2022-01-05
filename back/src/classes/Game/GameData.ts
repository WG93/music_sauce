import { QuestionType } from "../../mongoose/models/question/types";
import Player from "./Player";
import { GameTimeType, ModeEnum, RulesType } from "./types";

class GameData {
  public mode: ModeEnum = ModeEnum.WAITING_FOR_LAUNCH

  public question: QuestionType = {
    alias: [],
    answer: "",
    author: "",
    description: "",
    score: 0,
    time: 0,
    title: "",
  }

  public time: GameTimeType = {
    startedAt: 0,
    startedQuestionAt: 0,
  }

  constructor(
    public rules: RulesType,
    public players: Player[] = [],
  ) {}
}

export default GameData;
