import { InputText } from '../../../atoms';

interface GameInputsProps {
    answers?: any;
    onSubmit: (value: any) => void;
}

const GameInputs = ({ answers, onSubmit }: GameInputsProps) => {
    const onSubmitHandler = (value: any): void => {
        onSubmit(value);
    };

    return (
        <div className="game__inputs">
            {!answers && (
                <InputText onSubmit={(value) => onSubmitHandler(value)} />
            )}
        </div>
    );
};

export default GameInputs;
