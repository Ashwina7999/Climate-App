import React from 'react';
import Map, { Marker, NavigationControl, FullscreenControl } from 'react-map-gl';

function MapBox({ weather }) {

    return (
        <Map
            mapboxAccessToken='pk.eyJ1IjoiYXNod2luYTIwMjEiLCJhIjoiY2t3cWNkNHI1MGt4YTJvcW9vejRjeDZjeiJ9.LhbRxBZjhKGgrz_kk7YKCA'
            // initialViewState={{ longitude: weather.coord.lon, latitude: weather.coord.lat, zoom: 9 }}
            latitude={weather.coord.lat} longitude={weather.coord.lon} initialViewState={{ zoom: 9 }}
            mapStyle="mapbox://styles/mapbox/streets-v9">
            <Marker longitude={weather.coord.lon} latitude={weather.coord.lat} color='#E0115F' style={{ height: '55px' }} />
            <FullscreenControl />
            <NavigationControl position='bottom-right' />
        </Map>
    )
}
export default MapBox
