// import { reverseGeoLocation } from "./reverseGeoLocation";

export const getDeviceLocation = async (setLatitude, setLongitude, setUserLocation) => {
  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);
      // console.log("Latitide: " + latitude)
      // console.log("Latitide: " + longitude)
      return {latitude, longitude};
      // await reverseGeoLocation(latitude, longitude, setUserLocation);
    } catch (error) {
      console.log("Error in fetching location", error);
      throw error;
    }
  } else {
    console.error("Geolocation is not supported by the browser");
    throw new Error("Geolocation is not supported by the browser");
  }
};
