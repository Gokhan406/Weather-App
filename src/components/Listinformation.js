import React, { Component } from 'react'

export class Listinformation extends Component {
  render() {
    return (
        <div className='card-parent'>
            <div className='card'>
                <h3 className='card-title'>{this.props.weather_info.location.name},{this.props.weather_info.location.country}</h3>
                <h4 className='card-üst-title'>{this.props.weather_info.current.temp_c} C</h4>
                <img className='card-img' src={this.props.weather_info.current.condition.icon} alt=""/>
                <h4 className='card-alt-title'>{this.props.weather_info.current.condition.text}</h4>
                <hr />
                <div className='alt-icerik-parent'>
                    <h5 className='card-alt-icerik'>Hissedilen Sıcaklık: {this.props.weather_info.current.feelslike_c} C</h5>
                    <h5 className='card-alt-icerik'>Yerel Zaman: {this.props.weather_info.location.localtime}</h5>
                </div>
                <div className='alt-icerik-parent'>
                    <h5 className='card-alt-icerik'>Rüzgar Hızı: {this.props.weather_info.current.wind_kph} KM/H</h5>
                    <h5 className='card-alt-icerik'>En Son {this.props.weather_info.current.last_updated}'de güncellendi</h5>
                </div>
            </div>
        </div>
    )
  }
}

export default Listinformation