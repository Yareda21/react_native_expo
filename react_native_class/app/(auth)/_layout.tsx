import { StatusBar, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "@/constants/colors";

const AuthLayout = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];
    return (
        <>
            {/* <StatusBar value="auto" /> */}
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: theme.background },
                    headerTintColor: theme.title,
                }}
            >
                <Stack.Screen name="Login" options={{ title: "Login Page" }} />
                <Stack.Screen
                    name="Register"
                    options={{ title: "Registration Page" }}
                />
            </Stack>
        </>
    );
};

export default AuthLayout;
