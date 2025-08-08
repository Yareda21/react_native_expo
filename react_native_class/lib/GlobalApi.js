import axios from "axios";
const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
console.log("API_KEY:", API_KEY); // Make sure this is NOT undefined

const config = {
    headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask":
            "places.displayName,places.formattedAddress,places.location,places.shortFormattedAddress,places.photos",
    },
};

const NewNearbyPlaces = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data, config);
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching nearby places:",
            error.response?.data || error.message
        );
        throw error;
    }
};

export default NewNearbyPlaces;
