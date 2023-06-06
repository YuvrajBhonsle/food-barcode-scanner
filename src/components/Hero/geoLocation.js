import { reverseGeoLocation } from "./reverseGeoLocation";

export const getDeviceLocation = (setLatitude, setLongitude, setUserLocation) => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(latitude);
          setLongitude(longitude);
          reverseGeoLocation(latitude, longitude, setUserLocation)
            .then((location) => resolve(location))
            .catch((error) => reject(error));
        },
        function (error) {
          console.log("Error in fetching location", error);
          reject(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by the browser");
      reject(new Error("Geolocation is not supported by the browser"));
    }
  });
};
