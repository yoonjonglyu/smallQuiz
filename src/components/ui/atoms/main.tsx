import React from 'react';

import StyledComponents from 'styled-components';

interface MainProps {
    children: React.ReactNode
}
const MainStyle = StyledComponents.main`=
    min-height: 300px;
    color: #FE8F8F;
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