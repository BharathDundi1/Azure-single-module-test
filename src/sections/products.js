import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import React from 'react';
import styled from 'styled-components';
import ProductCard from '../components/product-card';
import Section from '../components/section-container';
import Content from '../data/products.json';

const ProductsContainer = styled(Section)`
    background: linear-gradient(to bottom, #ffffff, #dbdbdb);

    .cards {
        margin-top: 1rem;

        >* {
            margin: 2rem 0;
            padding: 0;
        }
    }
`;

const CenteredCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

const ProductsSection = ({ ...props }) => {
    return (
        <ProductsContainer
            {...Content.header}
            {...props}
        >
            <Row className="cards">
                {Content.cards.map(({ location, ...cardProps }, index) => (
                    <CenteredCol xs={12} md={6} key={`kit-prod-card-${index}`}>
                        <ProductCard
                            {...cardProps}
                            onClick={() => window.location = location}
                        />
                    </CenteredCol>
                ))}
            </Row>
        </ProductsContainer>
    )
}

export default ProductsSection
