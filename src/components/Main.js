import React, { Component } from 'react'
import Inputs from './Inputs'
import Listinformation from './Listinformation'

export class Main extends Component {
  render() {
    return (
        <main>
            <Inputs request_weather={this.props.request_weather}/>
            {this.props.response_data !== "" && <Listinformation weather_info={this.props.response_data}/>}
        </main>
    )
  }
}

export default Main