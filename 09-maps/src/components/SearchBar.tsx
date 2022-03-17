import { ChangeEvent, useRef } from 'react';
import { usePlaceContext } from '../context/places/PlacesContext';

export const SearchBar = () => {
  const { searchPlacesByQuery } = usePlaceContext()
  const debounceRef = useRef<number>()

  const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => {

    if(debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      searchPlacesByQuery(e.target.value)
    }, 500)
  }

  return (
    <div className='search-container'>
      <input 
        type="text" 
        className="form-control"
        placeholder="Buscar"
        onChange={onQueryChanged}
      />
    </div>
  )
}
