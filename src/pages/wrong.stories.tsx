import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Wrong from './wrong';

export default {
    title: "스몰퀴즈/페이지/Wrong",
    component: Wrong
} as ComponentMeta<typeof Wrong>

const template: ComponentStory<typeof Wrong> = (props) => <Wrong {...props} />;

export const Basic = template.bind({});
Basic.args = {

};