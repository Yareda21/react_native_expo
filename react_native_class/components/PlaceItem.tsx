import { View, Text, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
// import { config } from "dotenv";

// config();

const PlaceItem = ({ place }: any) => {
    const PHOTO_BASE_URL = "https://places.googleapis.com/v1";
    const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

    return (
        <View className="w-full">
            <Image
                className="w-full rouded-lg h-50"
                source={
                    place.photo
                        ? {
                              uri:
                                  PHOTO_BASE_URL +
                                  place.photo[0].name +
                                  "/media?key=" +
                                  API_KEY +
                                  "&maxHeightPX=800&maxWidthPx=1200",
                          }
                        : require("@/assets/images/cross.png")
                }
            />

            <View>
                <Text>{place.displayName.text}</Text>
            </View>
            <View>
                <Text className="text-gray-500 text-sm">
                    {place.shortFormattedAddress}
                </Text>
            </View>
            <View>
                <FontAwesome name="location-arrow" size={16} color="black" />
            </View>
        </View>
    );
};

export default PlaceItem;
