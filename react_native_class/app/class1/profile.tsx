import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
const logo = require("@/assets/images/react-logo.png");

const Profile = () => {
    return (
        <View className="flex-1 bg-white">
            <View className="flex-1 justify-center items-center p-4">
                <View className="bg-slate-100 p-6 rounded-xl shadow-sm w-full max-w-sm">
                    <View className="items-center mb-4">
                        <Image
                            source={logo}
                            className="w-24 h-24 mb-4"
                            resizeMode="contain"
                        />
                        <Text className="text-2xl font-bold text-gray-800 mb-1">
                            User Name
                        </Text>
                        <Text className="text-gray-600 mb-6">
                            ykebed40@gmail.com
                        </Text>
                        <Link href="/settings" asChild>
                            <Pressable className="bg-blue-500 px-6 py-2 rounded-lg">
                                <Text className="text-white font-semibold">
                                    Settings
                                </Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Profile;
