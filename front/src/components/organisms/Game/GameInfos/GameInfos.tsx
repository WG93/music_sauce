import { Timer } from '../../../atoms';

import './GameInfos.scss';

export interface GameInfosProps {
    timer?: {
        value: number;
    };
}

const GameInfos = ({ timer }: GameInfosProps) => {
    const { value = 0 } = timer || {};
    return (
        <div className="game__infos">{timer && <Timer value={value} />}</div>
    );
};

export default GameInfos;
