import { useMapContext } from '../context/map/MapContext';
import { usePlaceContext } from '../context/places/PlacesContext';
export const BtnMyLocation = () => {
  const { map, isMapReady  } = useMapContext()
  const { userLocation }  = usePlaceContext()

  const handleClick = () => {
    if(!isMapReady) throw new Error('Map is not ready');
    if(!userLocation) throw new Error('No hay ubicación del usuario');

    map?.flyTo({
      zoom: 14,
      center: userLocation
    })
  }

  return (
    <button 
      onClick={handleClick}
      className='btn btn-primary' 
      style={{
        position: 'fixed',
        right: '20px',
        top: '20px',
        zIndex: 999,
      }}>
      Mi Ubicación
    </button>
  )
}
