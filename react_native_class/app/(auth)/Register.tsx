import { View, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import ThemedContainer from "@/components/ThemedContainer";
import Spacer from "@/components/Spacer";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        // Basic validation
        if (!email || !password || !confirmPassword) {
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

        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match");
            return;
        }

        // TODO: Implement actual registration logic
        Alert.alert("Success", "Registration successful!");
    };

    return (
        <ThemedContainer>
            <Spacer />
            <ThemedView className="w-full p-6">
                <ThemedText title={true} className="text-3xl mb-6">
                    Register
                </ThemedText>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4"
                    placeholderTextColor="#666"
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4"
                    placeholderTextColor="#666"
                />

                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                    className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-6"
                    placeholderTextColor="#666"
                />

                <Pressable
                    onPress={handleRegister}
                    className="bg-blue-500 p-4 rounded-lg mb-4"
                >
                    <ThemedText className="text-white text-center font-bold">
                        Register
                    </ThemedText>
                </Pressable>

                <Link href="/Login" asChild>
                    <Pressable>
                        <ThemedText className="text-center text-blue-500">
                            Already have an account? Login
                        </ThemedText>
                    </Pressable>
                </Link>
            </ThemedView>
        </ThemedContainer>
    );
};

export default Register;
