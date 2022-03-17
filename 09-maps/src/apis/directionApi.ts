import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN_MAPBOX

export const directionApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: ACCESS_TOKEN
  }
})