import React from 'react';

import StyledComponents from 'styled-components';


interface HeaderProps {
    children: React.ReactNode
    color?: string
}
const HeaderStyle = StyledComponents.header`
    min-height: 120px;
    color: ${props => props.color || '#FF5C58'};
    text-align: center;
`;

const Header: React.FC<HeaderProps> = (props) => {
    const {
        children,
        color
    } = props;

    return (
        <HeaderStyle color={color}>
            {children}
        </HeaderStyle>
    )
}

export default Header;