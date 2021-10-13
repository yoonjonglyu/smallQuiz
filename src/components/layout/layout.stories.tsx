import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from './layout';

export default {
    title: "스몰퀴즈/컴포넌트/Layout",
    component: Layout
} as ComponentMeta<typeof Layout>;

const template: ComponentStory<typeof Layout> = (props) => <Layout  {...props} />;

export const Basic = template.bind({});
Basic.args = {
    header: "타이틀",
    children: <h2>내용</h2>
};