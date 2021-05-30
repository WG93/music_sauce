import { Story, Meta } from '@storybook/react';
import { Questions } from '../../../../debug';

import GameQuestion, { GameQuestionProps } from './GameQuestion';

export default {
    title: 'Game/GameQuestion',
    component: GameQuestion,
    argTypes: {},
} as Meta;

const Template: Story<GameQuestionProps> = (args) => <GameQuestion {...args} />;

export const SimpleQuestion = Template.bind({});
SimpleQuestion.args = {
    question: Questions[5],
};

export const QuestionHint = Template.bind({});
QuestionHint.args = {
    question: Questions[4],
};

export const QuestionImage = Template.bind({});
QuestionImage.args = {
    question: Questions[3],
};
