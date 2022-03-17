import { Latitude, Longitude, PlacesState } from './PlacesProvider';

type PlacesAction =
  | { type: 'SET_USER_LOCATION', playload: [Longitude, Latitude] }
  
export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
  switch (action.type) {
    case 'SET_USER_LOCATION':
      return {
        ...state,
        userLocation: action.playload
      }

    default:
      return state;
  }
}