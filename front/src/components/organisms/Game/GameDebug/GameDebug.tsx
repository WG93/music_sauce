import { Button } from 'antd';
import { Dispatch } from 'react';
import {
    GameActions,
    GameState,
    GameStatusEnum,
    setQuestion,
    setResult,
    setStatus,
} from '../../../../store';
import { QuestionType, ResultType } from '../types';

const Questions: QuestionType[] = [
    {
        title: 'Quel est le grand philosophe qui a dit ça ?',
        content: {
            type: 'text',
            data: "Il est compliqué d'écrire sur les voyages dans le temps",
        },
        hint: 'ses facile',
        time: 5,
    },
    {
        title: `Comment s'appelle ce personnage de Naruto ?`,
        content: {
            type: 'image',
            data: 'https://fr.techtribune.net/wp-content/uploads/2020/10/jujutsu-kaisen-sukuna-domain-expansion-malevolent-shrine-anime-1242150-1280x0.jpeg',
        },
        time: 5,
    },
];

const Results: ResultType[] = [
    {
        answer: 'Karim Debbache',
        description:
            "Et oui en effet il est compliqué d'écrire sur les voyages dans le temps !",
        author: 'Samee',
    },
    {
        answer: 'Ryomen Sukuna',
        description: 'Bande de cons',
        author: 'Mayday',
    },
];

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
            <Button onClick={() => dispatch(setQuestion(Questions[1]))}>
                Set question
            </Button>
            <Button onClick={() => dispatch(setResult(Results[1]))}>
                Set result
            </Button>
            <Button onClick={() => setCollapsed(!collapsed)}>
                Close sider
            </Button>
        </>
    );
};

export default GameDebug;
