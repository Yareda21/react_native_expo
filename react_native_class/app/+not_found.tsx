import { View, Text } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function NotFound() {
    return (
        <>
            <Stack.Screen options={{ title: "Not Found" }} />
            <View className="flex-1 items-center justify-center p-4">
                <Text className="text-2xl font-bold mb-4">Page Not Found</Text>
                <Text className="text-gray-600 mb-4 text-center">
                    The page you&apos;re looking for doesn&apos;t exist or has
                    been moved.
                </Text>
                <Link href='/' className="text-blue-500 text-lg">
                    Go back to home
                </Link>
            </View>
        </>
    );
}
