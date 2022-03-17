import { PlacesContext } from "./PlacesContext";
import { useEffect, useReducer } from 'react';
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers";
import { searchApi } from "../../apis";
import { Feature, PlacesResponse } from "../../interfaces/places";
import { doSetLoadingPlaces, doSetPlaces } from "./placesActions";

export type Longitude = number;
export type Latitude = number;
export type LongLat = [Longitude, Latitude];

export interface PlacesState {
  isLoading: boolean;
  userLocation?: LongLat;
  isLoadingPlaces: boolean;
  places: Feature[];
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

const initialState: PlacesState = {
  isLoading: true,
  userLocation: undefined,
  isLoadingPlaces: false,
  places: []
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

  const searchPlacesByQuery = async (query: string): Promise<Feature[]> => {
    if(query.length === 0) return []; // Limpiar lista de lugares
    if(!state.userLocation) throw new Error('No hay ubicación del usuario');

    dispatch( doSetLoadingPlaces() )

    const resp = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    })

    dispatch( doSetPlaces(resp.data.features) )

    return resp.data.features;
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
