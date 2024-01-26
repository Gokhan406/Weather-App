import './App.css';
import React from 'react';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';

class App extends React.Component{
  constructor(props){
    super(props);
    this.request_weather = this.request_weather.bind(this);

    this.state = {
      response_data:""
    }
  }

  request_weather(cty_name){
    const url = `https://api.weatherapi.com/v1/current.json?key=ab5d3115204d4b84baa115847242601&q=${cty_name}&aqi=no`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({response_data:data}))
  }

  render(){
    return (
      <div>
        <Header/>
        <Main response_data={this.state.response_data} request_weather={this.request_weather}/>
      </div>
    );
  }
}  
export default App;