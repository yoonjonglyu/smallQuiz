import React from 'react';

import StyledComponents from 'styled-components';

interface MainProps {
    children: React.ReactNode
}
const MainStyle = StyledComponents.main`
    min-height: 300px;
    margin: 40px 0 30px 0;
    color: #FE8F8F;
    font-size: 1.2rem;
    text-align: center;
`;

const Main: React.FC<MainProps> = (props) => {
    const {
        children,
    } = props;

    return (
        <MainStyle role="main">
            {children}
        </MainStyle>
    )
}

export default Main;