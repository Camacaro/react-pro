import { createContext, useContext } from 'react';
import { Feature } from '../../interfaces/places';
import { Latitude, Longitude } from './PlacesProvider';

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [Longitude, Latitude];
  isLoadingPlaces: boolean;
  places: Feature[];

  // Methods
  searchPlacesByQuery: (query: string) => Promise<Feature[]>;
}

export const PlacesContext = createContext({} as PlacesContextProps);
export const usePlaceContext = () => useContext(PlacesContext);