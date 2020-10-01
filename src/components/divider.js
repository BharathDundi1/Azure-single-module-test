import React from 'react';
import styled from 'styled-components';

export const PaddedDivider = styled.div`
  height: 1px;
  margin: 0 12.5%;

  background-color: ${props => props.color || 'rgb(228, 228, 228)'};
`;

const DividerBG = styled.div`
  background-color: ${props => props.color || 'transparent'};
`;

export const Divider = ({ className, color, bg }) => (
  <DividerBG color={bg}>
    <PaddedDivider className={className} color={color} />
  </DividerBG>
)