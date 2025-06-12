import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/colors";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
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
            <Tabs.Screen
                name="Books"
                options={{
                    title: "Books",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={focused ? "book" : "book-outline"}
                            color={
                                focused
                                    ? theme.iconColorFocused
                                    : theme.iconColor
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="Create"
                options={{
                    title: "Create",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={focused ? "create" : "create-outline"}
                            color={
                                focused
                                    ? theme.iconColorFocused
                                    : theme.iconColor
                            }
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            size={24}
                            name={focused ? "person" : "person-outline"}
                            color={
                                focused
                                    ? theme.iconColorFocused
                                    : theme.iconColor
                            }
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
