import React from 'react';
import StyledComponents, { createGlobalStyle } from 'styled-components';

import Header from '../ui/atoms/header';
import Main from '../ui/atoms/main';
import Footer from '../ui/atoms/footer';

interface LayoutProps {
    header?: React.ReactNode
    children?: React.ReactNode
}
const CommonStyle = createGlobalStyle`
    body {
        background-color: #FFEDD3;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
`;

const Layout: React.FC<LayoutProps> = (props) => {
    const {
        header,
        children,
    } = props;

    return (
        <>
            <CommonStyle />
            <Header>
                <h1 role="heading">{header}</h1>
            </Header>
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
};

export default Layout;