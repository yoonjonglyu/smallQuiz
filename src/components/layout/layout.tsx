import React from 'react';

interface LayoutProps {
    header?: React.ReactNode
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
    const {
        header,
        children,
    } = props;

    return (
        <>
            <header>
                <h1 role="heading">{header}</h1>
            </header>
            <main role="main">
                {children}
            </main>
            <footer>
                <small>Copyright 2021. 류윤종 All Right Reserve.</small>
            </footer>
        </>
    )
};

export default Layout;