import styled, { css } from 'styled-components';

export const DisplayText = styled.span`
    /* Size */
    ${props => {
        switch (props.size) {
            case 'inherit': return css`font-size: inherit;`;
            case 'xxsmall': return css`font-size: 0.5rem;line-height: 1rem;`;
            case 'xsmall': return css`font-size: 0.6rem;line-height: 1.2rem;`;
            case 'small': return css`font-size: 0.75rem;line-height: 1.5rem;`;
            case 'medium': return css`font-size: 1rem;line-height: 1.3rem;`;
            case 'large': return css`font-size: 1.25rem;line-height: 1.55rem;`;
            case 'xlarge': return css`font-size: 1.75rem;line-height: 2.05rem;`;
            case 'xxlarge': return css`font-size: 2.25rem;line-height: 2.55rem;`;
            default:
                return css`font-size: 1rem;line-height: 1.3rem;`;
        }
    }}

    /* Weight */
    ${props => {
        switch (props.variant) {
            case 'inherit': return css`font-weight: inherit;`;
            case 'extra': return css`font-weight: 700;`;
            case 'strong': return css`font-weight: 600;`;
            case 'medium': return css`font-weight: 400;`;
            case 'subdued': return css`font-weight: 100;`;
            case 'regular': default:
                return css`font-weight: 300;`;
        }
    }}

    /* Styles */
    ${props => {
        switch (props.styled) {
            case 'italic': return css`font-style: italic;`;
            default:
                return '';
        }
    }}

    /* Color */
    ${props => {
        switch (props.color) {
            case 'inherit': return css`color: inherit;`;
            case 'light': return css`color: #747474;`;
            case 'primary': return css`color: #ffb900;`;
            case 'secondary': return css`color: #4a4a4a;`;
            default:
                return css`color: ${typeof props.color === 'string' ? props.color : '#2a2a2a'};`;
        }
    }}
`;