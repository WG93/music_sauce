import { QuestionType, ResultType } from '../../components/organisms/Game';

export enum GameStatusEnum {
    WAITING,
    STARTING,
    QUESTION,
    RESULT,
    FINISHED,
}

export interface Player {
    username: string;
    score: number;
}

export interface GameState {
    status: GameStatusEnum;
    answers: string[];
    players: Player[];
    defaultTimer: number;
    question?: QuestionType;
    result?: ResultType;
}

export enum GameActionEnum {
    SET_ANSWERS,
    SET_STATUS,
    SET_DEFAULT_TIMER,
    SET_QUESTION,
    SET_RESULT,
}

interface IGameAction {
    type: GameActionEnum;
    payload?: any;
}

export interface SetAnswersAction extends IGameAction {
    type: GameActionEnum.SET_ANSWERS;
    payload: string[];
}

export interface SetStatusAction extends IGameAction {
    type: GameActionEnum.SET_STATUS;
    payload: GameStatusEnum;
}

export interface SetDefaultTimerAction extends IGameAction {
    type: GameActionEnum.SET_DEFAULT_TIMER;
    payload: number;
}

export interface SetQuestionAction extends IGameAction {
    type: GameActionEnum.SET_QUESTION;
    payload?: QuestionType;
}

export interface SetResultAction extends IGameAction {
    type: GameActionEnum.SET_RESULT;
    payload?: ResultType;
}

export type GameActions =
    | SetAnswersAction
    | SetStatusAction
    | SetDefaultTimerAction
    | SetQuestionAction
    | SetResultAction;
