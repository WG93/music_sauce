import { ClockCircleOutlined } from '@ant-design/icons';

import './Timer.scss';

interface TimerProps {
    value: number;
}

const Timer = ({ value }: TimerProps) => (
    <div className="timer">
        <ClockCircleOutlined />
        {value}
    </div>
);

export default Timer;
