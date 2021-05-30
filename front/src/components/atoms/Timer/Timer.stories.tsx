import { Story, Meta } from '@storybook/react';

import Timer, { TimerProps } from './Timer';

export default {
    title: 'UI/Timer',
    component: Timer,
} as Meta;

const Template: Story<TimerProps> = (args) => <Timer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    value: 24,
};
