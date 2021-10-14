import React from 'react';

import styled from 'styled-components';

const StyledDate = styled.p`
    height: 80px;
    margin: 50px 50px;
    background-color: ${pr => pr.theme.blueSapphire};
    color: ${pr => pr.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    border-radius: 10px;
    box-shadow: 5px 5px ${pr => pr.theme.black};
`

export default function Date({date}) {
    return <StyledDate>Today's Date: {date}</StyledDate>
}
