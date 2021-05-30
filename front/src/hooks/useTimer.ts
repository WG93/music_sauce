import { useCallback, useEffect, useState } from 'react';

interface UseTimerParams {
    onTimerFinish: () => void;
}

interface UseTimerReturn {
    timer: number;
    setTime: (time: number) => void;
    startTimer: () => void;
    resetTimer: () => void;
}

const useTimer = ({ onTimerFinish }: UseTimerParams): UseTimerReturn => {
    const [timer, setTimer] = useState(0);
    const [maxTime, setMaxTime] = useState(0);

    const setTime = useCallback((time: number) => {
        setMaxTime(time);
        setTimer(0);
    }, []);

    const startTimer = useCallback(() => {
        setTimer(maxTime);
    }, [maxTime]);

    const resetTimer = useCallback(() => {
        setTimer(0);
    }, []);

    useEffect(() => {
        const intervalId =
            timer > 0 &&
            setInterval(() => {
                setTimer((timer) => {
                    if (timer - 1 <= 0) {
                        onTimerFinish();
                        return 0;
                    }
                    return timer - 1;
                });
            }, 1000);
        return () => clearInterval(intervalId as any);
    }, [timer, onTimerFinish]);

    return {
        timer,
        setTime,
        startTimer,
        resetTimer,
    };
};

export default useTimer;
