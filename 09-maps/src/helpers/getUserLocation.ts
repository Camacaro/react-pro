import { LongLat } from "../context/places/PlacesProvider";

export const getUserLocation = async (): Promise<LongLat> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve([position.coords.longitude, position.coords.latitude]);
      },
      (error) => {
        alert('No se pudo obtener la geolocalización');
        console.log(error);
        reject();
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      },
    );
  });
}