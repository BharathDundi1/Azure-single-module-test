import Col from 'muicss/lib/react/col';
import Row from 'muicss/lib/react/row';
import React from 'react';
import styled, { css } from 'styled-components';
import { DisplayText } from '../components/display-text';
import Section from '../components/section-container';
import Content from '../data/solutions.json';
import Arrow from '../components/arrow';
import breakpoint from 'styled-components-breakpoint';

const SolutionsContainer = styled(Section)`
    background-color: white;
    .split-view {
        align-items: stretch;
    }
`;

const SolutionList = styled(Row)`
    margin-top: 5rem;
    margin-bottom: 3rem;
`;

const SolutionContent = styled.div`
    margin-bottom: 3rem;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;

    .title, .desc {
        width: 100%;
    }

    .desc {
        margin-top: 0.5rem;
    }

    ${breakpoint('md')`
        ${props => props.selected ? css`
            .desc {
                color: #2a2a2a;
            }
        ` : css`
            .title, .desc {
                color: #9b9b9b;
            }
        `}
    `}

    >img {
        margin-bottom: 0.5rem;
        
        display: block;
        ${breakpoint('md')`
            display: none;
        `}

        max-width: 5rem;
    }

    text-align: center;
    ${breakpoint('md')`
        text-align: left;
    `}
`;

const SolutionImage = styled.img`
    width: 100%;
`;

const TextContent = styled(Col)`
    
`;

const ImageContent = styled(Col)`
    padding: 0 3rem;
    
    display: none;
    ${breakpoint('md')`
        display: block;
    `}
`;

const ActiveIndicator = styled(Arrow)`
    display: none;
    ${breakpoint('md')`
        display: inline-block;
    `}
`;

const SolutionsSection = ({ ...props }) => {
    const [selected, setSelected] = React.useState(0);

    return (
        <SolutionsContainer
            {...Content.header}
            {...props}
        >
            <SolutionList className="split-view">
                <TextContent xs={12} md={6}>
                    {Content.list.map((sol, index) => (
                        <SolutionContent key={`kit-sol-content-${index}`} onClick={() => setSelected(index)} selected={selected === index}>
                            <SolutionImage key={`kit-sol-thumb-${index}`} src={sol.thumb} />
                            <DisplayText className="title" variant="strong" size="medium" color={sol.color}>
                                {selected === index ? <ActiveIndicator color={sol.color} direction="right" /> : null} {sol.title}
                            </DisplayText>
                            <DisplayText className="desc" size="small">
                                {sol.desc}
                            </DisplayText>
                        </SolutionContent>
                    ))}
                </TextContent>
                <ImageContent md={6}>
                    {Content.list.map((sol, index) => selected === index ? (
                        <SolutionImage key={`kit-sol-img-${index}`} src={sol.image} />
                    ) : null)}
                </ImageContent>
            </SolutionList>
        </SolutionsContainer>
    )
}

export default SolutionsSection
