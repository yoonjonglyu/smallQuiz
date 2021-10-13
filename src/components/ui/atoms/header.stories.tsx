import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './header';

export default {
    title: "스몰퀴즈/Ui/Atoms/Header",
    component: Header
} as ComponentMeta<typeof Header>

const template: ComponentStory<typeof Header> = (props) => <Header {...props} />;

export const Basic = template.bind({});
Basic.args = {
    children: <h1>test</h1>,
    color: "red"
};