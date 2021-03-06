import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from './main';

export default {
    title: '스몰퀴즈/페이지/Main',
    component: Main,
    decorators: [(Story) =>
        <RecoilRoot>
            <Router>
                <Story />
            </Router>
        </RecoilRoot>
    ]
} as ComponentMeta<typeof Main>

const template: ComponentStory<typeof Main> = (props) => <Main {...props} />;

export const Basic = template.bind({})
Basic.args = {

};
