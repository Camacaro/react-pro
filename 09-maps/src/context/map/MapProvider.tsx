import { AnySourceData, LngLatBounds, Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { useEffect, useReducer } from 'react';
import { mapReducer } from './mapReducer';
import { doSetMap, doSetMarkers } from './mapActions';
import { usePlaceContext } from '../places/PlacesContext';
import { LongLat } from '../places/PlacesProvider';
import { directionApi } from '../../apis';
import { DirectionsResponse } from '../../interfaces/directions';

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
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
    
    const url = `${ start.join(',') };${ end.join(',') }`
    const resp = await directionApi.get<DirectionsResponse>(url);
    const { distance, duration, geometry } = resp.data.routes[0];
    const { coordinates } = geometry;
    
    let kms = distance / 1000;
      kms = Math.round(kms * 100);
      kms /= 100;

    const durationInMinutes = Math.floor(duration / 60)

    console.log({
      kms,
      durationInMinutes
    })

    /**
     * Espacio en pantalla para mostrar la ruta entre los dos puntos
     */
    const bounds = new LngLatBounds(
      start,
      start
    );

    for (const coord of coordinates) {
      const [ lng, lat ] = coord;

      bounds.extend([ lng, lat ]);
    }

    state.map?.fitBounds(bounds, {
      padding: 200
    });

    /**
     * Polyline
     * Dibujar dirección entre dos puntos
     * 
     * Mapbox llama a los lugares "Feature"
     */
    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates,
            }
          }
        ]
      }
    }

    /**
     * Preguntamos si existe alguna ruta previa (un polyline)
     * Si existe, la borramos
     * 
     * El id ('RouteString') es una clave única para identificar el polyline
     * si quiero mas de una ruta, tendré que agregar un id diferente
     */
    if(state.map?.getLayer('RouteString')) {
      state.map?.removeLayer('RouteString');
      state.map?.removeSource('RouteString');
    }

    /**
     * Se agrega el Polyline al mapa
     * que es como la ruta entre los dos puntos
     * pero no se va a ver porque faltan los estilos
     * y el primer parametro es un ID
     */
    state.map?.addSource('RouteString', sourceData);

    /**
     * Estilos para el Polyline
     */
    state.map?.addLayer({
      id: 'RouteString',
      type: 'line',
      source: 'RouteString',
      layout: {
        'line-cap': 'round',
        'line-join': 'round'
      },
      paint: {
        'line-color': '#61DAFB', // black
        'line-width': 3,
      }
    });
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
