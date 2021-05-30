import { useEffect, useReducer, useState } from 'react';
import { useTimer } from '../../../hooks';
import {
    gameInitialState,
    gameReducer,
    GameStatusEnum,
    setAnswers,
    setStatus,
} from '../../../store';
import { Layout } from '../../organisms';
import {
    GameDebug,
    GameInfos,
    GameInputs,
    GameQuestion,
    GameResult,
} from '../../organisms/Game';

import './Game.scss';

const Game = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [state, dispatch] = useReducer(gameReducer, gameInitialState);
    const { timer, setTime, startTimer, resetTimer } = useTimer({
        onTimerFinish: () => dispatch(setStatus(GameStatusEnum.RESULT)),
    });

    useEffect(() => {
        if (state.question) {
            setTime(state.question?.time);
        }
    }, [state.question, setTime]);

    useEffect(() => {
        if (state.status === GameStatusEnum.QUESTION) {
            startTimer();
        } else {
            resetTimer();
        }
    }, [state.status, startTimer, resetTimer]);

    return (
        <Layout>
            <Layout.Header>
                <div>musicSauce</div>
                <div className="game__header__actions">
                    <GameDebug
                        state={state}
                        dispatch={dispatch}
                        collapsedState={{ collapsed, setCollapsed }}
                    />
                </div>
            </Layout.Header>
            <Layout.Content className="game__content">
                <div>
                    {state.status === GameStatusEnum.WAITING &&
                        'Waiting for the game to start...'}

                    {state.status === GameStatusEnum.STARTING &&
                        'Starting right now!'}

                    {state.status === GameStatusEnum.QUESTION &&
                        state.question && (
                            <GameQuestion question={state.question} />
                        )}

                    {state.status === GameStatusEnum.RESULT &&
                        state.result &&
                        state.question && <GameResult result={state.result} />}

                    {state.status === GameStatusEnum.FINISHED && (
                        <div>you lose !</div>
                    )}
                </div>
                <GameInfos timer={{ value: timer }} />
            </Layout.Content>
            <Layout.Sider collapsed={collapsed}>
                <div>musicSauce</div>
            </Layout.Sider>
            <Layout.Footer className="game__footer">
                {state.status === GameStatusEnum.QUESTION && state.question && (
                    <GameInputs
                        answers={state.question.answers}
                        onSubmit={(value) =>
                            dispatch(setAnswers([value, 'secondValue']))
                        }
                    />
                )}
            </Layout.Footer>
        </Layout>
    );
};

export default Game;
