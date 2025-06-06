import { Colors } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";
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
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen name="(auth)" />
                <Stack.Screen
                    name="(protected)"
                    options={{
                        headerShown: true,
                        title: "Dashboard",
                    }}
                />
            </Stack>
        </>
    );
};

export default RootLayout;
