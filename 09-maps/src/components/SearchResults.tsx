import { usePlaceContext } from '../context/places/PlacesContext';
import { LoadingPlaces } from './LoadingPlaces';
import { Feature } from '../interfaces/places';
import { useMapContext } from '../context/map/MapContext';
import { useState } from 'react';

export const SearchResults = () => {
  const { map, getRouteBetweenPlaces } = useMapContext()
  const { places, isLoadingPlaces, userLocation } = usePlaceContext()

  const [activeId, setActiveId] = useState('');

  const onPlaceClick = (place: Feature) => {
    const [ lng, lat ] = place.center;

    setActiveId(place.id);

    map?.flyTo({
      zoom: 14,
      center: [lng, lat]
    })
  }

  const getRoute = (place: Feature) => {

    if(!userLocation) return;

    const [ lng, lat ] = place.center;
    
    getRouteBetweenPlaces(userLocation, [ lng, lat ])
  }
  
  if(isLoadingPlaces) return <LoadingPlaces />

  if(places.length === 0) return <></>

  return (
    <ul className='list-group mt-3'>

      {
        places.map( place => (
          <li 
            className={`list-group-item list-group-item-action pointer ${activeId === place.id && 'place-active'}`} 
            key={place.id}
            onClick={() => onPlaceClick(place)}
          >
            <h6>{place.text_es}</h6>
            
            <p className='text-muted' style={{
              fontSize: '12px'
            }} >
              {place.place_name_es}
            </p>

            <button 
              onClick={() => getRoute(place)}
              className={`btn btn-sm ${activeId === place.id ? 'btn-outline-light button-active' : 'btn-outline'}`} 
            >
              Dirección
            </button>
          </li>
        ))
      }

    </ul>
  )
}
