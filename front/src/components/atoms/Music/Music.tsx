import { PlayCircleTwoTone } from '@ant-design/icons';
import { Slider } from 'antd';
import { useEffect, useRef, useState } from 'react';

import './Music.scss';

export interface MusicProps {
    url: string;
    play?: boolean;
}

const Music = ({ url, play = true }: MusicProps) => {
    const [volume, setVolume] = useState(50);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (play) {
                audioRef.current.play();
            } else {
                audioRef.current.currentTime = 0;
                audioRef.current.pause();
            }
        }
    }, [play]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100;
        }
    }, [volume]);

    return (
        <div className="music">
            <audio ref={audioRef}>
                <source src={url} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <PlayCircleTwoTone twoToneColor="#c9caff" className="music__icon" />
            <Slider
                value={volume}
                className="music__selector"
                onChange={(value: number) => setVolume(value)}
                tooltipVisible={false}
                trackStyle={{ backgroundColor: '#8688bf' }}
                handleStyle={{ borderColor: '#c9caff' }}
                step={1}
            />
        </div>
    );
};

export default Music;
