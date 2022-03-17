import { Map, Marker } from 'mapbox-gl';
import { MapActions } from "./mapReducer"

export const doSetMap = (map: Map): MapActions => ({
  type: 'SET_MAP',
  payload: map
})

export const doSetMarkers = (markers: Marker[]): MapActions => ({
  type: 'SET_MARKERS',
  payload: markers
})