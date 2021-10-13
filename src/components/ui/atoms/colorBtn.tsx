import React from 'react';

import StyledComponents from 'styled-components';

interface ColorBtnProps {
    children?: React.ReactNode
    color?: string
    onClick?: () => void
}
const ColorBtnStyle = StyledComponents.button`
    width: 50%;
    height: 2rem;
    padding: 4px 3px;
    background-color: ${props => props.color || "#FE8F8F"};
    border-color: #FCD2D1;
    border-radius: 4px;
    color: #FCD2D1;
    
`;

const ColorBtn: React.FC<ColorBtnProps> = (props) => {
    const {
        children,
        color,
        onClick
    } = props;

    return (
        <ColorBtnStyle type="button" color={color} onClick={onClick}>
            {children}
        </ColorBtnStyle>
    )
}

export default ColorBtn;