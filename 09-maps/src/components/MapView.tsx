import { useRef, useLayoutEffect } from 'react';
import { Map } from 'mapbox-gl';

import { usePlaceContext } from '../context/places/PlacesContext';
import { Loading } from './Loading';
import { useMapContext } from '../context/map/MapContext';

export const MapView = () => {
  const { isLoading ,userLocation }  = usePlaceContext();
  const { setMap } = useMapContext()
  
  const mapDiv = useRef<HTMLDivElement>(null);

  /**
   * UseLayoutEffect is a hook that runs after the initial render
   * and after the component has been updated
   * 
   * This is used to initialize the map
   * get all size of the map div screen
   */
  useLayoutEffect(() => {
    
    if(isLoading) return;

    const map = new Map({
      container: mapDiv.current!, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: userLocation, // starting position [lng, lat]
      zoom: 14 // starting zoom
    });

    setMap(map);

  }, [isLoading])

  if(isLoading) {
    return <Loading />
  }

  return (
    <div 
      ref={mapDiv}
      style={{
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vw',
      }}
    >
      
    </div>
  )
}
