import axios from "axios";

export const reverseGeoLocation = async (latitude, longitude, setUserLocation) => {
  try {
    const REVERSE_API = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    const geoResponse = await axios.get(REVERSE_API);
    if (geoResponse.status === 200) {
      const geoData = geoResponse.data;
      console.log(geoData);
      // const loc = String(geoData.display_name);
      // const modifiedLoc = loc.split(" ").replace("-")
      setUserLocation(geoData.display_name);
    }
  } catch (error) {
    console.error("Error in fetching geoLocation", error);
  }
};
