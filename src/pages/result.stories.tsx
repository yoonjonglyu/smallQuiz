import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Result from './result';

export default {
    title: "스몰퀴즈/페이지/Result",
    component: Result
} as ComponentMeta<typeof Result>


const template: ComponentStory<typeof Result> = (props) => <Result {...props} />;

export const Basic = template.bind({});
Basic.args = {
    statis: {
        time: 388,
        answer: 8,
        wrong: 2,
    }
};