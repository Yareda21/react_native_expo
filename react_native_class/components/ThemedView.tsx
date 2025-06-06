import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";

const ThemedView = ({ ...props }) => {
    const themeColor = useColorScheme();

    const theme = Colors[themeColor ?? "light"];
    return (
        <View
            style={{ backgroundColor: theme.background }}
            {...props}
        />
    );
};

export default ThemedView;
