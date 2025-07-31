import { View, TextInput, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import ThemedContainer from "@/components/ThemedContainer";
import Spacer from "@/components/Spacer";
import { useUser } from "@/hooks/useUser";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { register, login, user } = useUser();

    const handleRegister = async () => {
        setError("");
        setIsLoading(true);

        // Basic validation
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            setIsLoading(false);
            return;
        }

        if (!email.includes("@")) {
            setError("Please enter a valid email");
            setIsLoading(false);
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least 8 characters");
            setIsLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false);
            return;
        }

        try {
            await register(email, password);
        } catch (error: any) {
            console.error("Registration error:", error);
            let errorMessage =
                "An error occurred during registration. Please try again.";

            // Handle Appwrite specific error codes and messages
            if (
                error?.message?.includes(
                    "Password must be between 8 and 256 characters long"
                )
            ) {
                errorMessage =
                    "Password must be between 8 and 256 characters long.";
            } else if (error?.message?.includes("email already exists")) {
                errorMessage =
                    "This email is already registered. Please try logging in instead.";
            } else if (error?.message?.includes("Invalid email")) {
                errorMessage = "Please enter a valid email address.";
            } else if (error?.message) {
                errorMessage = error.message;
            }

            setError(errorMessage);
            setIsLoading(false);
            return;
        }
    };

    return (
        <ThemedContainer>
            <Spacer />
            <ThemedView className="w-full p-6">
                <ThemedText title={true} className="text-3xl mb-6">
                    Register
                </ThemedText>

                {error ? (
                    <View className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-4">
                        <ThemedText className="text-red-600 dark:text-red-200 text-center">
                            {error}
                        </ThemedText>
                    </View>
                ) : null}

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setError("");
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="bg-gray-100 p-4 rounded-lg mb-4"
                    placeholderTextColor="#666"
                    editable={!isLoading}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        setError("");
                    }}
                    secureTextEntry
                    className="bg-gray-100 p-4 rounded-lg mb-4"
                    placeholderTextColor="#666"
                    editable={!isLoading}
                />

                <TextInput
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={(text) => {
                        setConfirmPassword(text);
                        setError("");
                    }}
                    secureTextEntry
                    className="bg-gray-100 p-4 rounded-lg mb-6"
                    placeholderTextColor="#666"
                    editable={!isLoading}
                />

                <Pressable
                    onPress={handleRegister}
                    className={`${
                        isLoading ? "bg-blue-300" : "bg-blue-500"
                    } p-4 rounded-lg mb-4`}
                    disabled={isLoading}
                >
                    <ThemedText className="text-white text-center font-bold">
                        {isLoading ? "Registering..." : "Register"}
                    </ThemedText>
                </Pressable>

                <Link href="/Login" asChild>
                    <Pressable disabled={isLoading}>
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
