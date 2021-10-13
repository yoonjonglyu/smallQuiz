import React from 'react';
import { Link } from 'react-router-dom';

import StyledComponents from 'styled-components';


interface LinkBtnProps {
    children?: React.ReactNode
    to: string
    color?: string
    onClick?: () => void
}
const LinkBtnStyle = StyledComponents(Link)`
    padding: 3px 8px;
    border-radius: 6px;
    background-color: ${props => props.color || '#FF5C58'};
    color: #f7efef;
    font-size: 1rem;
    text-align: center;
    text-decoration: none;
    
`;

const LinkBtn: React.FC<LinkBtnProps> = (props) => {
    const {
        children,
        to,
        color,
        onClick
    } = props;

    return (
        <LinkBtnStyle to={to} color={color} onClick={onClick}>
            {children}
        </LinkBtnStyle>
    )
}

export default LinkBtn;