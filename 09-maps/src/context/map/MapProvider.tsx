import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { useEffect, useReducer } from 'react';
import { mapReducer } from './mapReducer';
import { doSetMap, doSetMarkers } from './mapActions';
import { usePlaceContext } from '../places/PlacesContext';
import { LongLat } from '../places/PlacesProvider';

export interface MapState {
  isMapReady: boolean;
  map?: Map
  markers: Marker[]
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const initialState: MapState = {
  isMapReady: false,
  map: undefined,
  markers: []
}

export const MapProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(mapReducer, initialState);
  const { places }  = usePlaceContext()

  useEffect(() => {
    state.markers.forEach(marker => marker.remove())

    if(places.length === 0 || !state.map)  return;

    const newMarkers: Marker[] = []

    for (const place of places) {
      const [ lng, lat ] = place.center

      const popup = new Popup()
        .setHTML(`
          <h3>${place.text_es}</h3>
          <p>${place.place_name_es}</p>
        `)

      const marker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(state.map)

      newMarkers.push(marker)
    }

    dispatch( doSetMarkers(newMarkers) );
    
  }, [places])
  

  const setMap = (map: Map) => {
    const myLocationPopup = new Popup()
      .setHTML(`
        <h4>Aquí estoy</h4>
        <p>En algún lugar del mundo</p>
      `)

    new Marker({
      color: '#61DAFB'
    })
      .setLngLat( map.getCenter() )
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch(doSetMap(map))
  }

  const getRouteBetweenPlaces = async (start: LongLat, end: LongLat) => {
    
  }

  return (
    <MapContext.Provider
      value={{
        ...state,
        setMap,
        getRouteBetweenPlaces,
      }}
    >
      {children}
    </MapContext.Provider>
  )
}
