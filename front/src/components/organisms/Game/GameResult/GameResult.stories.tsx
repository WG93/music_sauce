import { Story, Meta } from '@storybook/react';
import { Results } from '../../../../debug';

import GameResult, { GameResultProps } from './GameResult';

export default {
    title: 'Game/GameResult',
    component: GameResult,
    argTypes: {},
} as Meta;

const Template: Story<GameResultProps> = (args) => <GameResult {...args} />;

export const SimpleResult = Template.bind({});
SimpleResult.args = {
    result: Results[0],
};
