import { Input } from 'antd';
import { useState } from 'react';

import './InputText.scss';

export interface InputTextProps {
    onSubmit: (value: string) => void;
}

const InputText = ({ onSubmit }: InputTextProps) => {
    const [value, setValue] = useState('');

    const onSubmitHandler = (): void => {
        const valueProcessed = value.trim();

        if (valueProcessed !== '') {
            onSubmit(valueProcessed);
            setValue('');
        }
    };

    return (
        <Input
            value={value}
            autoFocus
            className="input-text"
            onChange={(event) => setValue(event.target.value.trimLeft())}
            onKeyDown={(event) => {
                if (event.keyCode === 13) {
                    onSubmitHandler();
                }
            }}
        />
    );
};

export default InputText;
