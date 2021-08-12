import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
    font-size: 2em;
    margin-bottom: 0;
    padding-bottom: 0;
    color: ${pr => pr.theme.orangePeel};
`

export default function Title({title}) {
    return <StyledTitle>"{title}"</StyledTitle>
}