import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.img`
    width: 10rem;
    object-fit: contain;
`;

const Logo = () => {
    return (
        <LogoContainer
            src="img/rgb-now-floats-logo-y.png"
            srcset="img/rgb-now-floats-logo-y@2x.png 2x, img/rgb-now-floats-logo-y@3x.png 3x"
        />
    )
}

export default Logo
