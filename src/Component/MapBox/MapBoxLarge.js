import React from 'react';
import '../MapBox/MapBoxLarge.css';
import MapBox from './MapBox';

function MapBoxLarge({ weather, closeMapBox }) {

  return (
    <div id="airbox" className="airbox">
      <p className='map-box-close' onClick={closeMapBox} >&times;</p>
      <div id='map' className='map map-large'>
        <MapBox weather={weather}/>
      </div>
      <br></br><br></br>
    </div>

  )
}

export default MapBoxLarge
