import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LinkBtn from './linkBtn';

export default {
    title: "스몰퀴즈/Ui/Atoms/LinkBtn",
    component: LinkBtn,
    decorators: [(Story) => <Router><Story /></Router>]
} as ComponentMeta<typeof LinkBtn>

const template: ComponentStory<typeof LinkBtn> = (props) => <LinkBtn {...props} />;

export const Basic = template.bind({});
Basic.args = {
    children: '링크',
    to: "/",
    color: "red"
};