import React from 'react';
import ActionButton from './action-button';
import Card, { CardActions, CardContent, CardDesc, CardImage, CardTitle } from './card';
import styled from 'styled-components';

const ProductContent = styled(CardContent)`
    padding-bottom: 1rem;
`;

const ProductCard = ({ image, title, desc, primary, action, onClick }) => {
    return (
        <Card>
            <CardImage>
                <img src={image} />
            </CardImage>
            <ProductContent>
                <CardTitle size="small" variant="strong">
                    {title}
                </CardTitle>
                <CardDesc size="small" variant="medium" color="light">
                    {desc}
                </CardDesc>
                <CardActions>
                    <ActionButton color={primary} onClick={onClick}>{action}</ActionButton>
                </CardActions>
            </ProductContent>
        </Card>
    )
}

export default ProductCard
