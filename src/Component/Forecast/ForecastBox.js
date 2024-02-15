import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Forecast.css';

class ForecastBox extends Component {

  render() {

    const { boxData, icons } = this.props;

    new Date().toLocaleTimeString()
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = new Date(boxData.dt * 1000).toLocaleTimeString('en-us', options).replace(/,/g, "").split(' ');

    return createPortal(
      <div className='forecast-blur'>
        <center>
          <div className='forecast-popup'>
            <p className='forecast-close close' onClick={this.props.closeForecastBox}>&times;</p>
            <div id='container' className=''>

              <div className='column-6'>
                <br></br>
                <h2>Forecast</h2>
                <img className='foreBoxImg' src={icons[boxData.weather[0].icon + '.png']} alt=''></img>
                <p className='temperature foreBox-temp'> <mark className='temp' style={{ color: 'black' }}>{Math.round(boxData.temp.day)}</mark><mark className='celcius' style={{ color: 'black' }}>°c</mark> </p>
                <p className='D-M-Y foreboxColor'><b>{date[0]}</b></p><p>{date[2]}, {date[1]} {date[3]}</p>
                <p className='foreboxColor'>IN</p>
                <br></br>
                <h5 className='description foreboxColor'>{boxData.weather[0].description}</h5>
              </div>

              <div className='column-7'>
                <br></br><br></br>
                <div id='container' className=''>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['humidity.png']} alt='' className='mini-image'></img> Humidity</p>
                      <p className='mini-value'>{boxData.humidity} %</p>
                      <p className='mini-add'>East</p>
                    </div>
                  </div>
                  <br></br>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['feelsLike.png']} alt='' className='mini-image'></img> Feels Like</p>
                      <p className='mini-value'>{Math.round(boxData.feels_like.day)} %</p>
                      <p className='mini-add'></p>
                    </div>
                  </div>
                  <br></br>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['pressure.png']} alt='' className='mini-image'></img> Pressure</p>
                      <p className='mini-value'>{boxData.pressure}</p>
                      <p className='mini-add'>hpa</p>
                    </div>
                  </div>
                </div>

                <br></br><br></br>
                <div id='container' className=''>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['windDegree.png']} alt='' className='mini-image'></img> Wind Degree</p>
                      <p className='mini-value'>{boxData.wind_deg} °N  </p>
                      <p className='mini-add'></p>
                    </div>
                  </div>
                  <br></br>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['windSpeed.png']} alt='' className='mini-image'></img> Wind Speed</p>
                      <p className='mini-value'>{boxData.wind_speed} m/s</p>
                      <p className='mini-add'></p>
                    </div>
                  </div>
                  <br></br>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['pm10.jpg']} alt='' className='mini-image'></img> Wind Gust</p>
                      <p className='mini-value'>{Math.round(boxData.wind_gust)} km/h</p>
                      <p className='mini-add'>visible</p>
                    </div>
                  </div>
                </div>

                <br></br><br></br>
                <div id='container' className=''>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['dew.png']} alt='' className='mini-image'></img> Dew.Pt</p>
                      <p className='mini-value'>{boxData.dew_point} °c</p>
                      <p className='mini-add'>Cooled</p>
                    </div>
                  </div>
                  <br></br>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['preci.png']} alt='' className='mini-image'></img> PoP</p>
                      <p className='mini-value'>{boxData.pop} %</p>
                      <p className='mini-add'>Precipitation</p>
                    </div>
                  </div>
                  <br></br>
                  <div className='column-9'>
                    <div className='card'>
                      <p className='mini-desc'><img src={icons['uvi.png']} alt='' className='mini-image'></img> Uvi</p>
                      <p className='mini-value'>{boxData.uvi} nm</p>
                      <p className='mini-add'>Rays</p>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>

            </div>
          </div>
        </center>
      </div>, document.getElementById('root')
    )
  }
}

export default ForecastBox
