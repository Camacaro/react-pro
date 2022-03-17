import { createContext, useContext } from 'react';
import { Latitude, Longitude } from './PlacesProvider';

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [Longitude, Latitude];
}

export const PlacesContext = createContext({} as PlacesContextProps);
export const usePlaceContext = () => useContext(PlacesContext);