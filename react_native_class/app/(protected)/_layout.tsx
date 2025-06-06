import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/colors";
import { useColorScheme } from "react-native";
const TabLayout = () => {
    const themeColor = useColorScheme();
    const theme = Colors[themeColor ?? "light"];
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingTop: 10,
                    height: 110,
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
            }}
        >
            <Tabs.Screen name="Books" options={{ title: "Books" }} />
            <Tabs.Screen name="Create" options={{ title: "Create" }} />
            <Tabs.Screen name="dashboard" options={{ title: "Profile" }} />
        </Tabs>
    );
};

export default TabLayout;
