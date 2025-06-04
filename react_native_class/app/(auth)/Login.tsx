import { View, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import ThemedCard from "@/components/ThemedCard";
import Spacer from "@/components/Spacer";
import ThemedContainer from "@/components/ThemedContainer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Basic validation
        if (!email || !password) {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }

        if (!email.includes("@")) {
            Alert.alert("Error", "Please enter a valid email");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Error", "Password must be at least 6 characters");
            return;
        }

        // TODO: Implement actual login logic
        Alert.alert("Success", "Login successful!");
    };

    return (
        <ThemedContainer>
            <ThemedView className="w-full p-6">
                <ThemedText title={true} className="text-3xl mb-6">
                    Login
                </ThemedText>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 p-4 rounded-lg mb-4"
                    placeholderTextColor="#666"
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6"
                    placeholderTextColor="#666"
                />

                <Pressable
                    onPress={handleLogin}
                    className="bg-blue-500 p-4 rounded-lg mb-4"
                >
                    <ThemedText className="text-white text-center font-bold">
                        Login
                    </ThemedText>
                </Pressable>

                <Link href="/Register" asChild>
                    <Pressable>
                        <ThemedText className="text-center text-blue-500">
                            Don&apos;t have an account? Register
                        </ThemedText>
                    </Pressable>
                </Link>
            </ThemedView>
        </ThemedContainer>
    );
};

export default Login;
