import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Wrong from './wrong';

export default {
    title: "스몰퀴즈/페이지/Wrong",
    component: Wrong,
    decorators: [(Story) => <Router><Story /></Router>]
} as ComponentMeta<typeof Wrong>

const template: ComponentStory<typeof Wrong> = (props) => <Wrong {...props} />;

const quiz = {
    question: 'This Greek mythological figure is the god\/goddess of battle strategy (among other things)',
    correct_answer: "Athena"
};

export const Basic = template.bind({});
Basic.args = {
    wrongs: new Array(5).fill(quiz)
};