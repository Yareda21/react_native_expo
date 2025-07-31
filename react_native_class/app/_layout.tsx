import { Colors } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";
import { StatusBar, useColorScheme } from "react-native";
import "./global.css";
import { UserProvider } from "@/contexts/useContext";
const RootLayout = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];

    // After Wrapping the app with userProvider, we can now provide the functions

    return (
        <UserProvider>
            <StatusBar value="auto" />
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.title,
                    headerShown: false,
                }}
            >
                <Stack.Screen name="index" />
                <Stack.Screen
                    name="(auth)"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="(protected)"
                    options={{
                        headerShown: false,
                        title: "Dashboard",
                    }}
                />
            </Stack>
        </UserProvider>
    );
};

export default RootLayout;
