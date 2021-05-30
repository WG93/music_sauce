import { ClockCircleOutlined } from '@ant-design/icons';

import './Timer.scss';

export interface TimerProps {
    value: number;
}

const Timer = ({ value }: TimerProps) => (
    <div className="timer">
        <ClockCircleOutlined />
        <div className="timer__value">{value}</div>
    </div>
);

export default Timer;
