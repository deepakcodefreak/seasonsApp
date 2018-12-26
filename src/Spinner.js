import React from 'react';
import './SeasonDisplay.css'

const Spiner = (props) => {
    console.log(props);
    return (
        
        <div className="ui segment center">
        <div className="ui active dimmer">
        <div className="ui massive text loader">{props.message}</div>
        </div>
        <p></p>
        <p></p>
        <p></p>
    </div>
    );
}

Spiner.defaultProps={
    message:'Loading'
}



export default Spiner;