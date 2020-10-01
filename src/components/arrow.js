import React from 'react';
import styled, { css } from 'styled-components';

const ArrowOnly = styled.div`
    width: 0;
    height: 0;
    border-top: 0.4rem solid transparent;
    border-bottom: 0.4rem solid transparent;
    border-right: 0.4rem solid ${props => props.color ? props.color : '#9b9b9b'};

    display: inline-flex;
    cursor: pointer;
    transform: rotate(${props => props.rotation}deg) ${props => props.scale && `scale(${props.scale})`};
`;

const ArrowBG = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: ${props => typeof props.bg === 'string' ? props.bg : 'white'};
    border-radius: 50%;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Arrow = ({ bg, direction, color, scale, ...props }) => {
    const rotation = direction === 'right' ? 180 : direction === 'up' ? 90 : direction === 'down' ? -90 : 0;
    return !!bg ? (
        <ArrowBG {...props}>
            <ArrowOnly color={color} scale={scale} rotation={rotation} />
        </ArrowBG>
    ) : (
            <ArrowOnly color={color} scale={scale} rotation={rotation} {...props} />
        )
}

export default Arrow;