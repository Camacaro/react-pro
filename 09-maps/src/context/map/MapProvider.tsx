import { Map } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { useReducer } from 'react';
import { mapReducer } from './mapReducer';

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

  return (
    <MapContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
