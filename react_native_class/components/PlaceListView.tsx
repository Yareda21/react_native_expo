import { View, Text, FlatList } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

const PlaceListView = ({ placeList }: any) => {
    return (
        <View>
            <FlatList
                data={placeList}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => (
                    <View key={index}>
                        <PlaceItem place={item} />
                    </View>
                )}
            />
        </View>
    );
};

export default PlaceListView;
