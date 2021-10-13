import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer from './footer';

export default {
    title: "스몰퀴즈/Ui/Atoms/Footer",
    component: Footer
} as ComponentMeta<typeof Footer>

const template: ComponentStory<typeof Footer> = (props) => <Footer {...props} />;

export const Basic = template.bind({});
Basic.args = {
};