import ThemedCard from "@/components/ThemedCard";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Colors } from "@/constants/colors";
import React from "react";
import { Text, useColorScheme, View } from "react-native";
import Spacer from "@/components/Spacer";
const About = () => {
    const colorTheme = useColorScheme();
    const theme = Colors[colorTheme ?? "light"];
    console.log(colorTheme);

    return (
        <ThemedView
            // style={{ backgroundColor: theme.background }}
            className="flex-1 p-6"
        >
            <View className="space-y-4">
                <ThemedText
                    title={true}
                    // style={{ color: theme.title }}
                    className="text-3xl font-bold mb-2"
                >
                    About Us
                </ThemedText>

                <ThemedText
                    title={false}
                    // style={{ color: theme.text }}
                    className="text-base leading-6"
                >
                    Welcome to our app! We&apos;re dedicated to providing you
                    with the best experience possible.
                </ThemedText>

                <ThemedText
                    // style={{ color: theme.text }}
                    className="text-base leading-6"
                >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quis, accusantium. Ex molestiae, tempore a reprehenderit
                    cumque amet officiis consectetur ipsam blanditiis architecto
                    error tempora ipsum voluptatibus quidem voluptatum,
                    voluptate sed!
                </ThemedText>

                <View
                    className="mt-6 p-4 rounded-lg"
                    style={{ backgroundColor: theme.uiBackground }}
                >
                    <ThemedText
                        title={true}
                        // style={{ color: theme.title }}
                        className="text-lg font-semibold mb-2"
                    >
                        Our Mission
                    </ThemedText>
                    <ThemedText
                        style={{ color: theme.text }}
                        className="text-base leading-6"
                    >
                        To create amazing experiences that make a difference in
                        people&apos;s lives.
                    </ThemedText>
                    <ThemedView>
                        <Spacer />
                        <ThemedCard />
                    </ThemedView>
                </View>
            </View>
        </ThemedView>
    );
};

export default About;
