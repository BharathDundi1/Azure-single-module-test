import React from 'react';
import styled from 'styled-components';
import { DisplayText } from './display-text';

const Button = styled.div`
    cursor: pointer;
    border-radius: 2rem;
    width: fit-content;
    padding: 0.25rem 2rem;

    min-height: 2rem;
    display: flex;
    align-items: center;

    background-color: ${props => {
        switch(props.color) {
            case 'primary': return '#ffb900;';
            case 'secondary': return '#4a4a4a;';
            default: return typeof props.color === 'string' ? props.color : '#498bd9';
        }
    }};
`;

const ActionButton = ({ color, text, children, onClick }) => {
    return (
        <Button color={color} onClick={onClick}>
            {!!text ? <DisplayText size="small" color="white" variant="strong">{text}</DisplayText> : null}
            {!!children ? <DisplayText size="small" color="white" variant="strong">{children}</DisplayText> : null}
        </Button>
    )
}

export default ActionButton
