import { usePlaceContext } from '../context/places/PlacesContext';
import { Loading } from './Loading';

export const MapView = () => {
  const { isLoading ,userLocation }  = usePlaceContext();

  if(isLoading) {
    return <Loading />
  }

  return (
    <div>
      {userLocation?.join(', ')}
    </div>
  )
}
