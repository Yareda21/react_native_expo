import { Link } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";

const Settings = () => {
    return (
        <View className="flex-1 bg-white p-4">
            <Text className="text-2xl font-bold mb-6">Settings</Text>

            <View className="space-y-4">
                <Link href="/settings/notifications" asChild>
                    <Pressable className="bg-slate-100 p-4 rounded-lg">
                        <Text className="text-lg">Notifications</Text>
                        <Text className="text-gray-600">
                            Manage your notification preferences
                        </Text>
                    </Pressable>
                </Link>

                <Link href="/settings/privacy" asChild>
                    <Pressable className="bg-slate-100 p-4 rounded-lg">
                        <Text className="text-lg">Privacy</Text>
                        <Text className="text-gray-600">
                            Control your privacy settings
                        </Text>
                    </Pressable>
                </Link>

                <Link href="/settings/account" asChild>
                    <Pressable className="bg-slate-100 p-4 rounded-lg">
                        <Text className="text-lg">Account</Text>
                        <Text className="text-gray-600">
                            Manage your account settings
                        </Text>
                    </Pressable>
                </Link>
            </View>

            <View className="mt-8">
                <Link href="/class1/index" asChild>
                    <Pressable className="bg-primary p-4 rounded-lg">
                        <Text className="text-white text-center text-lg">
                            Back to Home
                        </Text>
                    </Pressable>
                </Link>
            </View>
        </View>
    );
};

export default Settings;
