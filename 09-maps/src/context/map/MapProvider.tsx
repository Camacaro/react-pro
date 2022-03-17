import { Map } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { useReducer } from 'react';
import { mapReducer } from './mapReducer';
import { doSetMap } from './mapActions';

export interface MapState {
  isMapReady: boolean;
  map?: Map
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const initialState: MapState = {
  isMapReady: false,
  map: undefined
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, initialState);

  const setMap = (map: Map) => dispatch(doSetMap(map))

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
