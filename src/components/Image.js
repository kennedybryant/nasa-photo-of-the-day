import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
    width: 50%;
`

export default function Image({image}) {
    return <div className="imgContainer">
                <StyledImage src={image} alt='daily'/>
           </div>
}