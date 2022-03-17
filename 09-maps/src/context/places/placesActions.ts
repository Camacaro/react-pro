import { Feature } from "../../interfaces/places";
import { PlacesAction } from "./placesReducer";

export const doSetLoadingPlaces = (): PlacesAction => ({
  type: "SET_LOADING_PLACES"
})


export const doSetPlaces = (places: Feature[]): PlacesAction => ({
  type: "SET_PLACES_SEARCH_QUERY",
  payload: places
})