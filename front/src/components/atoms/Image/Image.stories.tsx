import { Story, Meta } from '@storybook/react';

import Image, { ImageProps } from './Image';

export default {
    title: 'UI/Image',
    component: Image,
    argTypes: {
        alt: {
            table: {
                disable: true,
            },
        },
    },
} as Meta;

export const Small: Story<ImageProps> = (args) => (
    <div style={{ width: '10rem' }}>
        <Image {...args} />
    </div>
);
Small.args = {
    src: 'https://otakukart.com/wp-content/uploads/2021/02/Jujutsu-Kaisen-Episode-20-Preview-and-Recap-600x337.jpg',
    alt: 'jujutsu',
};

export const Large: Story<ImageProps> = (args) => (
    <div style={{ width: '50rem' }}>
        <Image {...args} />
    </div>
);
Large.args = {
    src: 'https://otakukart.com/wp-content/uploads/2021/02/Jujutsu-Kaisen-Episode-20-Preview-and-Recap-600x337.jpg',
    alt: 'jujutsu',
};
