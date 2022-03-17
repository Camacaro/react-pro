import { createContext, useContext } from "react";
import { Map } from "mapbox-gl";

export interface MapContextProp {
  isMapReady: boolean;
  map?: Map;

  // Methods
  setMap(map: Map): void;
}

export const MapContext = createContext({} as MapContextProp)
export const useMapContext = () => useContext(MapContext)