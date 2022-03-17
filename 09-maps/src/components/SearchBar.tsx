import { ChangeEvent, useRef } from 'react';

export const SearchBar = () => {
  const debounceRef = useRef<number>()

  const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => {

    if(debounceRef.current) {
      clearTimeout(debounceRef.current)
    }

    debounceRef.current = setTimeout(() => {
      // TODO buscar
      console.log('debounce value', e.target.value)
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
