import { Story, Meta } from '@storybook/react';

import InputText, { InputTextProps } from './InputText';

export default {
    title: 'UI/InputText',
    component: InputText,
    argTypes: {
        onSubmit: {
            table: {
                disable: true,
            },
        },
    },
} as Meta;

const Template: Story<InputTextProps> = (args) => <InputText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    onSubmit: (value) => {},
};
