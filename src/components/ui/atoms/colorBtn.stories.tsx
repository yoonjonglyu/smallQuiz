import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ColorBtn from './colorBtn';

export default {
    title: "스몰퀴즈/Ui/Atoms/ColorBtn",
    component: ColorBtn
} as ComponentMeta<typeof ColorBtn>

const template: ComponentStory<typeof ColorBtn> = (props) => <ColorBtn {...props} />;

export const Basic = template.bind({});
Basic.args = {
    children: "다음 문제"
};