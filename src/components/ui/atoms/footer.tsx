import React from 'react';

import StyledComponents from 'styled-components';

interface FooterProps {
    children?: React.ReactNode
}
const FooterStyle = StyledComponents.footer`
    position: absolute;
    bottom: 0;
    width: 98%;
    margin: 0;
    padding: 0;
    min-height: 20px;
`;
const Copyright = StyledComponents.small`
    display: block;
    text-align: center;
`;

const Footer: React.FC<FooterProps> = (props) => {
    const {
        children,
    } = props;

    return (
        <FooterStyle>
            {children}
            <Copyright>Copyright 2021. 류윤종 All Right Reserve.</Copyright>
        </FooterStyle>
    )
}

export default Footer;