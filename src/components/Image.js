import React from 'react';

export default function Image({image}) {
    return <div className="imgContainer">
                <img src={image} alt='daily picture'/>
           </div>
}