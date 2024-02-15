import React from 'react';
import Rows from '../Rows';
import './View.css';
import Forecast from '../Forecast/Forecast';
import Background from './Background';
import MapBox from '../MapBox/MapBox';

function View({ weather, foreData, icons, background }) {

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var date = new Date().toLocaleTimeString('en-us', options).replace(/,/g, "").split(' ');

  let view = {
    0: { id: '', class: 'column-3', content: `<h1 class='city'>${weather.name}</h1> <p class='D-M-Y'>${date[0]}, ${date[2]} ${date[1]} ${date[3]}</p> <p class='country'>${weather.sys.country}</p> <p class='temperature'> <mark class='temp'>${Math.round(weather.main.temp)}</mark><mark class='celcius'>°c</mark> <img class='temp_img' src=${icons[weather.weather[0].icon + '.png']}  alt=''></img> </p> <h5 class='description'>${weather.weather[0].main}</h5>` },
    1: {
      id: '', class: 'column-3', content: {
        0: {
          id: 'container1', class: 'features-container', content: {
            0: { id: '', class: 'column-2', content: `<p> <img src=${icons['humidity.png']} alt=''></img> <b>Humidity</b></p> <p class='weather-det'>${Math.round(weather.main.humidity)}% </p>` },
            1: { id: '', class: 'column-2', content: `<p> <img src=${icons['feelsLike.png']} alt=''></img> <b>Feels Like</b></p> <p class='weather-det'>${Math.round(weather.main.feels_like)}%</p>` }
          }
        },
        1: {
          id: 'container1', class: 'features-container', content: {
            0: { id: '', class: 'column-2', content: `<p> <img src=${icons['pressure.png']} alt=''></img> <b>Pressure</b></p> <p class='weather-det'>${weather.main.pressure} mb</p>` },
            1: { id: '', class: 'column-2', content: `<p> <img src=${icons['windDegree.png']} alt=''></img> <b>Wind Degree</b></p> <p class='weather-det'>${weather.wind.deg} </p>` }
          }
        },
        2: {
          id: 'container1', class: 'features-container', content: {
            0: { id: '', class: 'column-2', content: `<p> <img src=${icons['windSpeed.png']} alt=''></img> <b>WindSpeed</b></p> <p class='weather-det'>${weather.wind.speed} mi</p>` },
            1: { id: '', class: 'column-2', content: `<p> <img src=${icons['visibility.png']} alt=''></img> <b>Visibility</b></p> <p class='weather-det'>${weather.visibility}</p>` }
          }
        }
      }
    }
  }

  return (
    <div>
      {<Background iconcode={weather.weather[0].icon} description={weather.weather[0].description} background={background} />}
      <div id='container' className=''>
        <Rows api={view} />
        <div id='' className='column-3'>
          <div id='map' className='map'>
            <MapBox weather={weather} />
          </div>
        </div>
      </div>
      <br></br>
      <Forecast icons={icons} weather={weather} foreData={foreData} />
    </div>
  )
}

export default View
