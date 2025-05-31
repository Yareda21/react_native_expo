import { Colors } from "@/constants/colors";
import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, useColorScheme, View } from "react-native";

const Index = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];

    return (
        <View
            style={{ backgroundColor: theme.background }}
            className="flex-1 p-6"
        >
            <View className="space-y-6">
                <Text
                    style={{ color: theme.title }}
                    className="text-3xl font-bold"
                >
                    Welcome
                </Text>

                <Text
                    style={{ color: theme.text }}
                    className="text-base leading-6"
                >
                    This is the home page of our application. Feel free to
                    explore!
                </Text>

                <Pressable className="mt-4 bg-primary p-4 rounded-lg">
                    <Link href="/About">
                        <Text className="text-white text-center font-semibold">
                            Learn More About Us
                        </Text>
                    </Link>
                </Pressable>
            </View>
        </View>
    );
};

export default Index;
