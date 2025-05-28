import { Link } from "expo-router";
import React from "react";
import { Pressable, Switch, Text, View } from "react-native";

const NotificationSettings = () => {
    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold mb-6">
                Notification Settings
            </Text>

            <View className="space-y-4">
                <View className="bg-slate-100 p-4 rounded-lg">
                    <View className="flex-row justify-between items-center">
                        <View>
                            <Text className="text-lg">Push Notifications</Text>
                            <Text className="text-gray-600">
                                Receive push notifications
                            </Text>
                        </View>
                        <Switch />
                    </View>
                </View>

                <View className="bg-slate-100 p-4 rounded-lg">
                    <View className="flex flex-row justify-between items-center">
                        <View>
                            <Text className="text-lg">Email Notifications</Text>
                            <Text className="text-gray-600">
                                Receive email updates
                            </Text>
                        </View>
                        <Switch />
                    </View>
                </View>

                <Link href="/settings" asChild>
                    <Pressable className="bg-blue-500 p-4 rounded-lg mt-4">
                        <Text className="text-white text-center font-semibold">
                            Back to Settings
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
};

export default NotificationSettings;
