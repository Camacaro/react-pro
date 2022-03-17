import { PlacesContext } from "./PlacesContext";
import { useReducer } from 'react';
import { placesReducer } from "./placesReducer";

export type Longitude = number;
export type Latitude = number;

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [Longitude, Latitude];

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
