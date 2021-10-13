import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Quiz from './quiz';

export default {
    title: "스몰퀴즈/페이지/Quiz",
    component: Quiz
} as ComponentMeta<typeof Quiz>

const template: ComponentStory<typeof Quiz> = (props) => <Quiz {...props} />;

export const Basic = template.bind({});
Basic.args = {
    quiz: {
        idx: 0,
        question: 'This Greek mythological figure is the god\/goddess of battle strategy (among other things)',
        correct_answer: "Athena",
        answers: ["Ares", "Artemis", "Apollo", "Athena"]
    }
};