import { Image, Music } from '../../../atoms';
import { Card } from '../../../molecules';
import { QuestionType } from '../types';

import './GameQuestion.scss';

export interface GameQuestionProps {
    question: QuestionType;
}

const GameQuestion = ({ question }: GameQuestionProps) => {
    const { content, title, hint } = question;

    const { type, data } = content || {};

    return (
        <Card title={title} className="game-question" hint={hint}>
            {content ? (
                <>
                    {type === 'text' && <div>{data}</div>}
                    {type === 'image' && <Image src={data} alt="alt" />}
                    {type === 'music' && <Music url={data} />}
                </>
            ) : null}
        </Card>
    );
};

export default GameQuestion;
