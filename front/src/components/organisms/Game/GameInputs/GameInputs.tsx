import { Choice, InputText } from '../../../atoms';
import { QuestionType } from '../types';

import './GameInputs.scss';

export interface GameInputsProps {
    choices: QuestionType['choices'];
    onSubmit: (value: any) => void;
}

const GameInputs = ({ choices, onSubmit }: GameInputsProps) => {
    const onSubmitHandler = (value: any): void => {
        onSubmit(value);
    };

    return (
        <div className="game__inputs">
            {choices ? (
                <div className="game__inputs__choices">
                    {choices.map((value, index) => (
                        <Choice
                            key={index}
                            label={value}
                            onClick={() => {
                                onSubmitHandler(value);
                            }}
                        />
                    ))}
                </div>
            ) : (
                <InputText onSubmit={(value) => onSubmitHandler(value)} />
            )}
        </div>
    );
};

export default GameInputs;
