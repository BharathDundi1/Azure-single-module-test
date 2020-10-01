import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { DisplayText } from '../components/display-text';
import Logo from '../components/logo';
import Content from '../data/hero.json';

const HeroContainer = styled.section`
    min-height: 90vh;
    ${breakpoint('sm')`
        min-height: 100vh;
    `}
    
    width: 100%;
    position: relative;
`;

const HeroContent = styled.div`
    padding-left: 1rem;
    padding-top: 1rem;

    ${breakpoint('md')`
        padding-left: 2rem;
        padding-top: 2rem;
    `}
    
    ${breakpoint('lg')`
        padding-left: 3rem;
        padding-top: 3rem;
    `}
    
    ${breakpoint('xl')`
        padding-left: 5rem;
    `}
`;

const HeroBG = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    z-index: -1;

    height: 100%;
    width: 100%;

    background-image: url('${Content.hero.image}'), linear-gradient(to right, #00000030 , transparent);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-attachment: fixed;
`;

const HeroText = styled.div`
    margin-top: 10rem;
    ${breakpoint('lg')`
        margin-top: 7rem;
    `};
    
    ${breakpoint('xl')`
        margin-top: 8rem;
    `};
    
    display: flex;
    flex-direction: column;

    span {
        line-height: 3rem;
    }

    max-width: 85%;
    ${breakpoint('md')`
        max-width: 65%;
    `};

    .subtext {
        margin-top: 1rem;
        line-height: 1.2rem;
    }
`;

const HeroWave = styled.img`
    position: absolute;
    left: 0;
    right: 0;
    bottom: -1px;
    width: 100vw;
`;

const HeroSection = ({ ...props }) => {
    return (
        <HeroContainer {...props}>
            <HeroBG />
            <HeroContent>
                <Logo />
                <HeroText>
                    <DisplayText size="xxlarge" variant="extra" styled="italic" color="white">{Content.headline[0]}</DisplayText>
                    <DisplayText size="xxlarge" variant="extra" styled="italic" color="primary">{Content.headline[1]}</DisplayText>
                    <DisplayText className="subtext" size="xsmall" variant="medium" color="white">{Content.subtext}</DisplayText>
                </HeroText>
            </HeroContent>
            <HeroWave src={Content.hero.wave} />
        </HeroContainer>
    )
}

export default HeroSection
