import { Map } from "mapbox-gl"
import { MapActions } from "./mapReducer"

export const doSetMap = (map: Map): MapActions => ({
  type: 'SET_MAP',
  payload: map
})

