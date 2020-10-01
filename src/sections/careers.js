import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Section from '../components/section-container';
import SwipeableCards from '../components/swipeable-cards';
import Content from '../data/careers.json';

const CareersContainer = styled(Section)`
    background: linear-gradient(to bottom, #ffffff, #dbdbdb);
    padding-bottom: 2rem;
`;

const Testimonials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    min-height: 75vh;

    >* {
        position: absolute;
        margin-top: 3rem;
    }
`;

const CareerBG = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100%;

    filter: grayscale(1);
    background: url('/img/bitmap.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
`;

const QuoteContainer = styled.div`
    border-radius: 3rem;
    -webkit-backdrop-filter: blur(1.4rem);
    backdrop-filter: blur(1.4rem);
    background-color: rgba(0, 0, 0, 0.2);

    height: 38%;
    width: calc(100% - 1.5rem);
    
    ${breakpoint('sm')`
        height: 30%;
        width: calc(100% - 2.5rem);
    `}

    ${breakpoint('md', 'lg')`
        height: 40%;
        width: calc(50% - 2rem);
    `}

    ${breakpoint('lg')`
        height: 50%;
        width: calc(50% - 2rem);
    `}

    padding-top: 2.5rem;
`;

const CardsContainer = styled(SwipeableCards)`
    height: 75%;
    width: 100%;
    
    ${breakpoint('md')`
        height: 100%;
        width: 50%;
    `}

    margin-top: 2.5rem;
`;

const CareersSection = ({ ...props }) => {
    return (
        <CareersContainer
            {...Content.header}
            {...props}
        >
            <Testimonials>
                <CareerBG />
                <QuoteContainer />
                <CardsContainer items={Content.testimonials} action="Check Openings" 
                                onAction={() => window.location = 'https://angel.co/company/nowfloats/jobs'}>

                </CardsContainer>
            </Testimonials>
        </CareersContainer>
    )
}

export default CareersSection
