import { Story, Meta } from '@storybook/react';

import Music, { MusicProps } from './Music';

export default {
    title: 'UI/Music',
    component: Music,
} as Meta;

const Template: Story<MusicProps> = (args) => <Music {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    url: `${process.env.PUBLIC_URL}/marisa theme.mp3`,
    play: false,
};
