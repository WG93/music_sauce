import {
    GameActionEnum,
    GameActions,
    GameState,
    GameStatusEnum,
} from './types';

export const gameInitialState: GameState = {
    answers: [],
    status: GameStatusEnum.WAITING,
    players: [],
    defaultTimer: 10,
};

export const gameReducer = (
    state: GameState,
    action: GameActions,
): GameState => {
    switch (action.type) {
        case GameActionEnum.SET_ANSWERS:
            return { ...state, answers: action.payload };
        case GameActionEnum.SET_STATUS:
            return { ...state, status: action.payload };
        case GameActionEnum.SET_DEFAULT_TIMER:
            return { ...state, defaultTimer: action.payload };
        case GameActionEnum.SET_QUESTION:
            return { ...state, question: action.payload };
        case GameActionEnum.SET_RESULT:
            return { ...state, result: action.payload };
        default:
            break;
    }
    return state;
};
