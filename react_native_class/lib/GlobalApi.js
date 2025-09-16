import axios from "axios";
const BASE_URL = "https://places.googleapis.com/v1/places:searchNearby";
const API_KEY = "API KEY HERE";

const config = {
    headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": API_KEY,
        "X-Goog-FieldMask": [
            "places.displayName",
            "places.formattedAddress",
            "places.location",
            "places.photos",
            "places.geometry",
            "places.churchType",
            "places.churchSize",
            "places.churchDenomination",
            "places.churchServiceTimes",
        ],
    },
};

const NewNearbyPlaces = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data, config);
        return response;
    } catch (error) {
        console.error("Error fetching nearby places:", error);
        throw error;
    }
};

export default NewNearbyPlaces;
