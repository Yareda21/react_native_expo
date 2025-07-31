import { View, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const ThemedView = ({ safeView = false, ...props }) => {
    const themeColor = useColorScheme();

    const theme = Colors[themeColor ?? "light"];
    if (!safeView) {
        return (
            <View style={{ backgroundColor: theme.background }} {...props} />
        );
    } else {
        return (
            <SafeAreaView
                style={{ backgroundColor: theme.background }}
                {...props}
            />
        );
    }
};

export default ThemedView;
