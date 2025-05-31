import { Colors } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import "./global.css";
const RootLayout = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];
    return (
        <>
            {/* <StatusBar value="auto"/> */}
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.title,
                }}
            >
                <Stack.Screen name="index" />
            </Stack>
        </>
    );
};

export default RootLayout;
