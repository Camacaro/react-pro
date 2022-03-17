import { Feature } from '../../interfaces/places';
import { LongLat, PlacesState } from './PlacesProvider';

export type PlacesAction =
  | { type: 'SET_USER_LOCATION', payload: LongLat }
  | { type: 'SET_PLACES_SEARCH_QUERY', payload: Feature[] }
  | { type: 'SET_LOADING_PLACES' }
  
export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
  switch (action.type) {
    case 'SET_USER_LOCATION':
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload
      }

    case 'SET_LOADING_PLACES':
      return {
        ...state,
        isLoadingPlaces: true,
        places: []
      }

    case 'SET_PLACES_SEARCH_QUERY':
      return {
        ...state,
        isLoadingPlaces: false,
        places: action.payload,
      }

    default:
      return state;
  }
}