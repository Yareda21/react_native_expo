import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";

const ThemedContainer = ({ ...props }) => {
    const themeColor = useColorScheme();
    const theme = Colors[themeColor ?? "light"];
    return (
        <View
            style={{ backgroundColor: theme.background }}
            {...props}
            className=" flex-1 justify-center items-center w-full"
        />
    );
};

export default ThemedContainer;
