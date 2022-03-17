import { createContext, useContext } from 'react';


export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
}



export const PlacesContext = createContext({} as PlacesContextProps);
export const usePlaceContext = () => useContext(PlacesContext);