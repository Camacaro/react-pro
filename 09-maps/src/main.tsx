import React from 'react'
import ReactDOM from 'react-dom'
import mapboxgl from 'mapbox-gl';

import { MapsApp } from './MapsApp'

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN_MAPBOX
 
mapboxgl.accessToken = ACCESS_TOKEN

if( !navigator.geolocation ){
  alert('Tu navegador no soporta geolocalización');
  throw new Error('Tu navegador no soporta geolocalización');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
)
