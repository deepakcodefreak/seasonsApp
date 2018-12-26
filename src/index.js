import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spiner from './Spinner';

class App extends React.Component{
    // constructor(props){
    //     super(props);

    //     this.state = {lat:null,errorMessage:''};

       
    // }

    state = {lat:null,errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>{
                this.setState({lat:position.coords.latitude})
            },
            err =>{
                this.setState({errorMessage:err.message})
            }
        )
 
    }

    componentDidUpdate(){
        console.log('my component was updated!');
    }

    renderBody(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(this.state.lat && !this.state.errorMessage ){
            return <SeasonDisplay lat= {this.state.lat}/>
        }

        return <Spiner message="Please give Location Permission"/>;
        
    }

    render(){
        return (<div className="border red">
            {this.renderBody()}
        </div>)
    }
}




ReactDOM.render(<App/>,document.querySelector('#root'));
