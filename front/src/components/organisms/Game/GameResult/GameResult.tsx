import { Card } from '../../../molecules';
import { ResultType } from '../types';

import './GameResult.scss';

interface GameResultProps {
    result: ResultType;
}

const GameResult = ({ result }: GameResultProps) => {
    const { answer, author, description } = result;

    return (
        <Card
            title={answer}
            className="game-result"
            hint={`Question submitted by ${author}`}
        >
            <div>{description}</div>
        </Card>
    );
};

export default GameResult;
