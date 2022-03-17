import { createContext, useContext } from "react";
import { Map, Marker } from "mapbox-gl";
import { LongLat } from "../places/PlacesProvider";

export interface MapContextProp {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[]

  // Methods
  setMap(map: Map): void;
  getRouteBetweenPlaces: (start: LongLat, end: LongLat) => Promise<void>
}

export const MapContext = createContext({} as MapContextProp)
export const useMapContext = () => useContext(MapContext)