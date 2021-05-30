import { QuestionType, ResultType } from '../../components/organisms/Game';
import {
    GameActionEnum,
    GameStatusEnum,
    SetAnswersAction,
    SetDefaultTimerAction,
    SetQuestionAction,
    SetResultAction,
    SetStatusAction,
} from './types';

export const setAnswers = (answers: string[]): SetAnswersAction => ({
    type: GameActionEnum.SET_ANSWERS,
    payload: answers,
});

export const setStatus = (status: GameStatusEnum): SetStatusAction => ({
    type: GameActionEnum.SET_STATUS,
    payload: status,
});

export const setDefaultTimer = (
    defaultTimer: number,
): SetDefaultTimerAction => ({
    type: GameActionEnum.SET_DEFAULT_TIMER,
    payload: defaultTimer,
});

export const setQuestion = (question?: QuestionType): SetQuestionAction => ({
    type: GameActionEnum.SET_QUESTION,
    payload: question,
});

export const setResult = (result?: ResultType): SetResultAction => ({
    type: GameActionEnum.SET_RESULT,
    payload: result,
});
