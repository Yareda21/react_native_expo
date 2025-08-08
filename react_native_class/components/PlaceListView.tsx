import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useEffect } from "react";
import PlaceItem from "./PlaceItem";

const PlaceListView = ({ placeList }: any) => {
    const flatListRef = React.useRef<FlatList>(null);
    
    useEffect(() => {
        scrollToIndex(0);
    },[])


    const scrollToIndex = (index: number) => {
        flatListRef.current?.scrollToIndex({
            index,
            animated: true,
        });
    
    const getItemLayout = (_, index:any) => ({
        length: Dimensions.get("window").width,
        offset: Dimensions.get("window").width * index,
    });
    return (
        <View>
            <FlatList
                data={placeList}
                horizontal={true}
                pagingEnabled={true}
                ref={flatListRef}
                getItemLayout={getItemLayout}
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
