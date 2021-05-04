import React, { useEffect, useState } from 'react';

function Charakters(props) {

    return (
        <div className="flip-card">
        <div className="flip-card-inner">
            <div className= "flip-card-front">
                <img src={props.character.image}/>
            </div>
            <div className="flip-card-back">
                <strong>{props.character.name}</strong>
            </div>
            </div>
            </div>
    );
}
export default Charakters;