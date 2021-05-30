import { Story, Meta } from '@storybook/react';

import GameInputs, { GameInputsProps } from './GameInputs';

export default {
    title: 'Game/GameInputs',
    component: GameInputs,
    argTypes: {
        onSubmit: {
            table: {
                disable: true,
            },
        },
    },
} as Meta;

const Template: Story<GameInputsProps> = (args) => <GameInputs {...args} />;

export const NoChoices = Template.bind({});
NoChoices.args = {};

export const TwoChoices = Template.bind({});
TwoChoices.args = {
    choices: ['Naruto', 'Itadori'],
};

export const ThreeChoices = Template.bind({});
ThreeChoices.args = {
    choices: ['Kurama', 'Gamabunta', 'Hachibi'],
};

export const FourChoices = Template.bind({});
FourChoices.args = {
    choices: [
        'Love Live Sunshine',
        'Love Live School Idol Project',
        'Aikatsu Stars',
        'Aikatsu',
    ],
};
