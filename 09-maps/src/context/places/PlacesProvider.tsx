import { PlacesContext } from "./PlacesContext";
import { useEffect, useReducer } from 'react';
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers";

export type Longitude = number;
export type Latitude = number;
export type LongLat = [Longitude, Latitude];

export interface PlacesState {
  isLoading: boolean;
  userLocation?: LongLat;
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const initialState: PlacesState = {
  isLoading: true,
  userLocation: undefined
}

export const PlacesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(placesReducer, initialState)

  useEffect(() => {
    getUserLocation()
      .then((lngLat) => dispatch({ 
        type: 'SET_USER_LOCATION', 
        payload: lngLat 
      }))
  }, [])
  

  return (
    <PlacesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </PlacesContext.Provider>
  )
}
