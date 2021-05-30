import { Story, Meta } from '@storybook/react';

import GameInfos, { GameInfosProps } from './GameInfos';

export default {
    title: 'Game/GameInfos',
    component: GameInfos,
    argTypes: {},
} as Meta;

const Template: Story<GameInfosProps> = (args) => <GameInfos {...args} />;

export const SimpleInfo = Template.bind({});
SimpleInfo.args = {
    timer: {
        value: 24,
    },
};
