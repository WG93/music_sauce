import { Story, Meta } from '@storybook/react';
import { useState } from 'react';

import Choice, { ChoiceProps } from './Choice';

export default {
    title: 'UI/Choice',
    component: Choice,
    argTypes: {},
} as Meta;

export const Primary: Story<ChoiceProps> = (args) => {
    const [selected, setSelected] = useState(false);

    return (
        <Choice
            {...args}
            onClick={() => setSelected(!selected)}
            selected={selected}
        />
    );
};
Primary.args = {
    label: 'Naruto',
};

export const NoFocus: Story<ChoiceProps> = (args) => <Choice {...args} />;

NoFocus.args = {
    label: 'Naruto',
};
