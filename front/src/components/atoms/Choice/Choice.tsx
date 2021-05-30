import classNames from 'classnames';
import './Choice.scss';

export interface ChoiceProps {
    label: string;
    selected?: boolean;
    onClick?: () => void;
}

const Choice = ({ label, selected = false, onClick }: ChoiceProps) => {
    const onClickHandler = () => {
        onClick?.();
    };
    return (
        <div
            role="button"
            onClick={onClickHandler}
            className={classNames('choice', {
                choice__selected: selected,
            })}
        >
            {label}
        </div>
    );
};

export default Choice;
