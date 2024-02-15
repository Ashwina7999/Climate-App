import React from 'react'
import './Additional.css'
import Rows from '../Rows';

function Additional({ icons, weather }) {

  let addDetails = {
    0: {
      id: 'container', class: '', content: {
        0: {
          id: '', class: 'column-4', content: {
            0: {
              id: 'container1', class: '', content: {
                0: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['latitude.png']}> <b>Latitude</b><br> <mark class="lat">${weather.coord.lat.toFixed()}</mark> </p>` },
                1: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['longitude.png']}> <b>Longitude</b><br> <mark class="lon">${weather.coord.lon.toFixed(2)}</mark> </p>` }
              }
            },
            1: {
              id: 'container1', class: '', content: {
                0: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['tempMin.png']}> <b>Min-Temp</b><br> <mark class="min_temp">${Math.round(weather.main.temp_min) + '°c'}</mark> </p>` },
                1: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['tempMax.png']}> <b>Max-Temp</b><br> <mark class="max_temp">${Math.round(weather.main.temp_max) + '°c'}</mark></p>` }
              }
            }
          }
        },
        1: {
          id: '', class: 'column-4', content: {
            0: {
              id: 'container1', class: '', content: {
                0: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['01d.png']} class="sun-rise"> <b>Sun-Rise</b><br> <mark class="sun_rise">${new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</mark> </p>` },
                1: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['moon.png']}> <b>Sun-Set</b><br> <mark class="sun_set">${new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</mark> </p>` }
              }
            },
            1: {
              id: 'container1', class: '', content: {
                0: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['timezone.png']}> <b>Time-Zone</b><br> <mark class="timezone">${weather.timezone}</mark></p>` },
                1: { id: '', class: 'column-2', content: `<p class="details"> <img src=${icons['02d.png']}> <b> All Clouds/Main</b><br> <mark class="cloud_main">${weather.clouds.all} / ${weather.weather[0].main}</mark></p>` }
              }
            }
          }
        }
      }
    }
  }

  return (
    <div>
      <h3 className={"additional-details"}>Additional Details</h3><br></br>
      <Rows api={addDetails} />
    </div>
  )
}

export default Additional
