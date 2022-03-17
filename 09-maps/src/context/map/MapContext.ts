import { createContext, useContext } from "react";
import { Map, Marker } from "mapbox-gl";

export interface MapContextProp {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[]

  // Methods
  setMap(map: Map): void;
}

export const MapContext = createContext({} as MapContextProp)
export const useMapContext = () => useContext(MapContext)