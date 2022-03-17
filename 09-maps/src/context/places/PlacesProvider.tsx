import { PlacesContext } from "./PlacesContext";
import { useEffect, useReducer } from 'react';
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers";
import { searchApi } from "../../apis";

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

  const searchPlacesByQuery = async (query: string) => {
    if(query.length === 0) return []; // Limpiar lista de lugares
    if(!state.userLocation) throw new Error('No hay ubicación del usuario');

    const resp = await searchApi.get(`/${ query }.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    })


    console.log(resp.data);

    return resp.data;
  }
  

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        searchPlacesByQuery,
      }}
    >
      {children}
    </PlacesContext.Provider>
  )
}
