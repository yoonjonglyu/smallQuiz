import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Quiz from './quiz';

export default {
    title: "스몰퀴즈/페이지/Quiz",
    component: Quiz,
    decorators: [(Story) =>
        <RecoilRoot>
            <Router>
                <Story />
            </Router>
        </RecoilRoot>
    ]
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