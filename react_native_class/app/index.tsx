import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
    StatusBar,
    useColorScheme,
} from "react-native";
import { Link } from "expo-router";

import { classes } from "../assets/data/classes";

export default function Home() {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === "dark";

    return (
        <SafeAreaView
            className={`flex-1 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
        >
            <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
            <ScrollView className="flex-1">
                <View className="p-6">
                    <Text
                        className={`text-3xl font-bold mb-2 ${
                            isDark ? "text-white" : "text-gray-900"
                        }`}
                    >
                        React Native Classes
                    </Text>
                    <Text
                        className={`text-base mb-8 ${
                            isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        Learn React Native development through practical
                        examples
                    </Text>

                    <View className="space-y-6  gap-3">
                        {classes.map((classItem) => (
                            <Link
                                key={classItem.title}
                                href={classItem.route}
                                asChild
                            >
                                <TouchableOpacity
                                    className={`p-5 rounded-xl ${
                                        isDark ? "bg-gray-800" : "bg-white"
                                    } shadow-lg`}
                                >
                                    <Text
                                        className={`text-xl font-bold mb-2 ${
                                            isDark
                                                ? "text-white"
                                                : "text-gray-900"
                                        }`}
                                    >
                                        {classItem.title}
                                    </Text>
                                    <Text
                                        className={`text-base mb-3 ${
                                            isDark
                                                ? "text-gray-300"
                                                : "text-gray-600"
                                        }`}
                                    >
                                        {classItem.description}
                                    </Text>
                                    <View className="flex-row flex-wrap gap-2">
                                        {classItem.topics.map(
                                            (topic, index) => (
                                                <View
                                                    key={index}
                                                    className={`px-3 py-1 rounded-full ${
                                                        isDark
                                                            ? "bg-gray-700"
                                                            : "bg-gray-100"
                                                    }`}
                                                >
                                                    <Text
                                                        className={`text-sm ${
                                                            isDark
                                                                ? "text-gray-300"
                                                                : "text-gray-600"
                                                        }`}
                                                    >
                                                        {topic}
                                                    </Text>
                                                </View>
                                            )
                                        )}
                                    </View>
                                </TouchableOpacity>
                            </Link>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
