import { Button } from 'antd';
import { Dispatch, useEffect, useState } from 'react';
import { Questions, Results } from '../../../../debug';
import {
    GameActions,
    GameState,
    GameStatusEnum,
    setQuestion,
    setResult,
    setStatus,
} from '../../../../store';

interface GameDebugProps {
    state: GameState;
    dispatch: Dispatch<GameActions>;
    collapsedState: {
        collapsed: boolean;
        setCollapsed: Dispatch<React.SetStateAction<boolean>>;
    };
}

const GameDebug = ({ state, dispatch, collapsedState }: GameDebugProps) => {
    const { collapsed, setCollapsed } = collapsedState;
    const [index, setIndex] = useState(0);

    useEffect(() => {
        dispatch(setQuestion(Questions[index]));
        dispatch(setResult(Results[index]));
        dispatch(setStatus(GameStatusEnum.QUESTION));
    }, [index]);

    return (
        <>
            <div>Status: {state.status}</div>
            <Button
                onClick={(): void => {
                    dispatch(
                        setStatus(
                            state.status === GameStatusEnum.WAITING
                                ? GameStatusEnum.STARTING
                                : state.status === GameStatusEnum.STARTING
                                ? GameStatusEnum.QUESTION
                                : state.status === GameStatusEnum.QUESTION
                                ? GameStatusEnum.RESULT
                                : state.status === GameStatusEnum.RESULT
                                ? GameStatusEnum.FINISHED
                                : GameStatusEnum.WAITING,
                        ),
                    );
                }}
            >
                Toggle status
            </Button>
            <div>Last answer: {state.answers.join(', ')}</div>
            <Button
                onClick={() => {
                    setIndex((index) =>
                        index + 1 > Questions.length - 1 ? 0 : index + 1,
                    );
                }}
                disabled={state.status !== GameStatusEnum.RESULT}
            >
                Set question
            </Button>
            <Button onClick={() => setCollapsed(!collapsed)}>
                Close sider
            </Button>
        </>
    );
};

export default GameDebug;
