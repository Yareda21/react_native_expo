import { Image } from "react-native";
import React, { useContext } from "react";
import { Marker } from "react-native-maps";
import { SelectedMarkerContext } from "@/contexts/SelectedMarkerContext";

const Markers = ({ place, index }: any) => {
    const { setSelectedMarker } = useContext(SelectedMarkerContext);
    return (
        <SelectedMarkerContext.Provider value={{ setSelectedMarker }}>
            <Marker
                coordinate={{
                    latitude: place.location.latitude,
                    longitude: place.location.longitude,
                }}
                onPress={() => setSelectedMarker(index)}
            >
                <Image
                    source={require("@/assets/images/cross.png")}
                    style={{ width: 23, height: 35 }}
                />
            </Marker>
        </SelectedMarkerContext.Provider>
    );
};

export default Markers;
