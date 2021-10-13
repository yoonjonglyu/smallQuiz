import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Quiz from './quiz';
import { Basic } from '../components/layout/layout.stories';

export default {
    title: "스몰퀴즈/페이지/Quiz",
    component: Quiz
} as ComponentMeta<typeof Quiz>

const template:ComponentStory<typeof Quiz> = (props) => <Quiz {...props} />;

export const Baisc = template.bind({});
Basic.args = {

};