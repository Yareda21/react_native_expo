import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const SearchBar = ({ searchedLocation }) => {
    return (
        <GooglePlacesAutocomplete
            placeholder="Search"
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                // this code is added after the google key
                searchedLocation(details?.geometry?.location);
            }}
            query={{
                key: "YOUR API KEY",
                language: "en",
            }}
        />
    );
};

export default SearchBar;
