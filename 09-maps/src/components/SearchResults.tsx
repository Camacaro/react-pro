import React from 'react'
import { usePlaceContext } from '../context/places/PlacesContext';
import { LoadingPlaces } from './LoadingPlaces';

export const SearchResults = () => {
  const { places, isLoadingPlaces } = usePlaceContext()
  
  if(isLoadingPlaces) return <LoadingPlaces />

  if(places.length === 0) return <></>

  return (
    <ul className='list-group mt-3'>

      {
        places.map( place => (
          <li className='list-group-item list-group-item-action' key={place.id}>
            <h6>{place.text_es}</h6>
            
            <p className='text-muted' style={{
              fontSize: '12px'
            }} >
              {place.place_name}
            </p>

            <button className='btn btn-outline btn-sm' style={{
              borderColor: '#61DAFB',
              color: '#61DAFB'
            }}>
              Direcciones
            </button>
          </li>
        ))
      }

    </ul>
  )
}
