import { useUser } from "@/hooks/useUser";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import {
    Pressable,
    ActivityIndicator,
    StyleSheet,
    Image,
    View,
    Text,
} from "react-native";
import { useState, useRef, useEffect } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, MapType } from "react-native-maps";
import { useLocation } from "@/hooks/useLocation";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import SearchBar from "../../components/SearchBar";
import NewNearbyPlaces from "../../lib/GlobalApi";
import PlaceListView from "@/components/PlaceListView";
import Markers from "@/components/Markers";
import { SelectedMarkerContext } from "@/contexts/SelectedMarkerContext";

export default function Dashboard() {
    const { logout, user } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    const { location } = useLocation();
    const mapRef = useRef(null);
    const [mapType, setMapType] = useState<MapType>("standard");

    const [placeList, setPlaceList] = useState<any[]>([]);

    const [selectedMarker, setSelectedMarker] = useState<any>([]);

    const handleLogout = async () => {
        setIsLoading(true);
        await logout();
    };

    const centerMap = () => {
        if (location && mapRef.current) {
            mapRef.current.animateToRegion(
                {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.042,
                    longitudeDelta: 0.042,
                },
                500
            );
        }
    };

    const toggleMapType = () => {
        setMapType((prev) => (prev === "standard" ? "satellite" : "standard"));
    };

    useEffect(() => {
        if (location && mapRef.current) {
            const GetNearByPlaces = () => {
                // first add the data info to the NewNearbyPlaces function
                const data = {
                    includedTypes: ["church"],
                    maxResultCount: 10,
                    locationRestriction: {
                        Circle: {
                            center: {
                                latitude: location.latitude,
                                longitude: location.longitude,
                            },
                            radius: 5000, // 5km radius
                        },
                    },
                };
                NewNearbyPlaces(data).then((res) => {
                    console.log(JSON.stringify(res.data));
                    setPlaceList(res.data.places || []);
                });
            };
            GetNearByPlaces();
        }
    }, [location]);

    return (
        <SelectedMarkerContext.Provider
            value={{ selectedMarker, setSelectedMarker }}
        >
            <View className="flex-1">
                {/* Map View */}
                {location ? (
                    <View className="flex-1">
                        <MapView
                            ref={mapRef}
                            style={StyleSheet.absoluteFillObject}
                            initialRegion={{
                                latitude: location.latitude,
                                longitude: location.longitude,
                                latitudeDelta: 0.042,
                                longitudeDelta: 0.042,
                            }}
                            provider={PROVIDER_GOOGLE}
                            mapType={mapType}
                            showsUserLocation={true}
                            showsMyLocationButton={false}
                            showsCompass={true}
                            showsScale={true}
                            showsTraffic={true}
                            showsBuildings={true}
                        >
                            <Marker
                                coordinate={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                }}
                                title="Your Location"
                                description="This is your current position"
                            >
                                <Image
                                    source={require("@/assets/images/cross.png")}
                                    style={{ width: 23, height: 35 }}
                                />
                            </Marker>

                            {placeList &&
                                placeList.map((item, index) => (
                                    <Markers
                                        key={index}
                                        index={index}
                                        place={item}
                                    />
                                ))}
                        </MapView>

                        {/* Transparent Overlay Header */}
                        <SafeAreaView className="absolute top-0 left-0 right-0 z-10">
                            {/* User Info */}
                            <View className="bg-black/30 rounded-xl mx-4 p-3 mt-2">
                                <View className="flex-row items-center justify-between">
                                    <View>
                                        <Text className="text-white text-base">
                                            Welcome,{" "}
                                            <Text className="font-bold text-blue-300">
                                                {user.email}
                                            </Text>
                                        </Text>
                                        <Text className="text-gray-300 text-sm mt-1">
                                            Viewing your current location
                                        </Text>
                                    </View>
                                    <Pressable
                                        onPress={handleLogout}
                                        className="flex-row items-center bg-red-500/90 rounded-lg w-28  px-3 py-2"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? (
                                            <ActivityIndicator color="white" />
                                        ) : (
                                            <>
                                                <Ionicons
                                                    name="log-out-outline"
                                                    size={18}
                                                    color="white"
                                                />
                                                <Text className="text-white ml-2">
                                                    Logout
                                                </Text>
                                            </>
                                        )}
                                    </Pressable>
                                </View>
                                <SearchBar
                                    searchedLocation={(location: any) =>
                                        console.log(location)
                                    }
                                />
                            </View>
                        </SafeAreaView>

                        {/* Map Controls */}
                        <View className="absolute right-4 bottom-4 space-y-3">
                            <Pressable
                                onPress={centerMap}
                                className="bg-white/90 p-3 rounded-full shadow-lg"
                            >
                                <Ionicons
                                    name="locate"
                                    size={24}
                                    color="#3b82f6"
                                />
                            </Pressable>
                            <Pressable
                                onPress={toggleMapType}
                                className="bg-white/90 p-3 rounded-full shadow-lg"
                            >
                                <Ionicons
                                    name={
                                        mapType === "standard"
                                            ? "map"
                                            : "map-outline"
                                    }
                                    size={24}
                                    color="#3b82f6"
                                />
                            </Pressable>
                        </View>

                        <View className="absolute bottom-0 left-0 right-0 bg-white/90 p-4 rounded-t-lg shadow-lg">
                            {placeList && (
                                <PlaceListView placeList={placeList} />
                            )}
                        </View>
                    </View>
                ) : (
                    <ThemedView className="flex-1 items-center justify-center">
                        <ActivityIndicator size="large" color="#3b82f6" />
                        <ThemedText className="mt-4 text-gray-500">
                            Getting your location...
                        </ThemedText>
                    </ThemedView>
                )}
            </View>
        </SelectedMarkerContext.Provider>
    );
}
