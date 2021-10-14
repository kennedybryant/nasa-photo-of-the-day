import React from 'react';
import styled from 'styled-components';

const StyledExp = styled.p`
    padding:  20px 20px;
    background-color: ${pr => pr.theme.blueSapphire};
    color: ${pr => pr.theme.black};
    border-radius: 10px;
    box-shadow: 5px 5px ${pr => pr.theme.black};
`

export default function Explanation({explanation}) {
    return <StyledExp>{explanation}</StyledExp>
}
