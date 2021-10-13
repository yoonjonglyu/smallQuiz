import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Main from './main';

export default {
    title: "스몰퀴즈/Ui/Atoms/Main",
    component: Main
} as ComponentMeta<typeof Main>

const template: ComponentStory<typeof Main> = (props) => <Main {...props} />;

export const Basic = template.bind({});
Basic.args = {
    children: <p>메인</p>
};