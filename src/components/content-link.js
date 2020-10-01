import React from 'react'
import styled from 'styled-components';

export const CONTENT_MAP = {
    phone: 'tel:',
    mail: 'mailto:'
}

const StyledLink = styled.a`
    color: inherit;
`;

const ContentLink = ({ type, link, children }) => {
    return (
        <StyledLink href={`${type || ''}${link}`}>{children ? children : link}</StyledLink>
    )
}

export default ContentLink
