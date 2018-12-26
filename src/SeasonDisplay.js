import './SeasonDisplay.css' 
import React from 'react';


const SeasonConfig = {
    winter:{
        text:'its cold',
        iconName:'snowflake'
    },
    summer:{
        text:"let's move to beach",
        iconName:'sun'
    }
}

const getSeason = (lat,month)=>{
    if(lat > 0){
        return month>2 && month<9 ? 'summer':'winter';
    }else{
        return month>2 && month<9 ? 'winter':'summer';
    }
}


const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat,new Date().getMonth());
    const {text,iconName} = SeasonConfig[season];
    //const text = (season === 'winter')?'its cold ':'Lets hit the beach';
    //const iconName = (season === 'winter')?'snowflake':'sun';
    return (
    
     <div className ={`season-display ${season}`} >
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
    );
}

export default SeasonDisplay;