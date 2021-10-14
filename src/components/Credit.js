import React from 'react';
import styled from 'styled-components';

const StyledCredit = styled.p`
    margin-top: 5px;
    margin-bottom: 25px;
    font-size: 1.1em;
`

export default function Credit({copyright}) {
    return <StyledCredit>Credit: {copyright}</StyledCredit>
} 
