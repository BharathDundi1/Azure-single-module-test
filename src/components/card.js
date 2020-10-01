import styled from 'styled-components';
import { DisplayText } from './display-text';
import breakpoint from 'styled-components-breakpoint';

const Card = styled.div`
    height: 20rem;
    width: 20rem;
    padding: 0 0.5rem;

    ${breakpoint('sm')`
        height: 20rem;
        width: 20rem;
    `}

    border-radius: 10px;
    box-shadow: 0 5px 23px 0 rgba(255, 185, 0, 0.2);
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const CardImage = styled.div`
    display: flex;
    align-items: flex-end;
    
    width: 75%;
    flex: 1;

    >img {
        width: 100%;
        object-fit: contain;
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    width: 100%;
    flex: 2;

    text-align: center;
`;

export const CardTitle = styled(DisplayText)`
    
`;

export const CardDesc = styled(DisplayText)`
    padding: 0 3rem;
`;

export const CardActions = styled.div`
    display: flex;
    justify-content: center;
`;

export default Card
