import { Colors } from "@/constants/colors";
import React from "react";
import { Text, useColorScheme, View } from "react-native";

const About = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];
    console.log(colorTheme);

    return (
        <View
            style={{ backgroundColor: theme.background }}
            className="flex-1 p-6"
        >
            <View className="space-y-4">
                <Text
                    style={{ color: theme.title }}
                    className="text-3xl font-bold mb-2"
                >
                    About Us
                </Text>

                <Text
                    style={{ color: theme.text }}
                    className="text-base leading-6"
                >
                    Welcome to our app! We're dedicated to providing you with
                    the best experience possible.
                </Text>

                <Text
                    style={{ color: theme.text }}
                    className="text-base leading-6"
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis, accusantium. Ex molestiae, tempore a reprehenderit
                    cumque amet officiis consectetur ipsam blanditiis architecto
                    error tempora ipsum voluptatibus quidem voluptatum,
                    voluptate sed!
                </Text>

                <View
                    className="mt-6 p-4 rounded-lg"
                    style={{ backgroundColor: theme.uiBackground }}
                >
                    <Text
                        style={{ color: theme.title }}
                        className="text-lg font-semibold mb-2"
                    >
                        Our Mission
                    </Text>
                    <Text
                        style={{ color: theme.text }}
                        className="text-base leading-6"
                    >
                        To create amazing experiences that make a difference in
                        people's lives.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default About;
