import { View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Link, router } from "expo-router";
import { AppwriteException } from "react-native-appwrite";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import ThemedContainer from "@/components/ThemedContainer";
import { useUser } from "@/hooks/useUser";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useUser();

    const handleLogin = async () => {
        // quick front-end sanity check
        if (!email.trim() || !password) {
            setError("Please fill in both email and password");
            return;
        }

        setError("");
        setIsLoading(true);

        try {
            // your hook should throw on failure
            await login(email.trim(), password);
            router.replace("/(protected)/dashboard");
        } catch (err) {
            console.error("Login error:", err);

            // if it's an Appwrite exception, show its message
            if (err instanceof AppwriteException && err.message) {
                setError(err.message);
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ThemedContainer>
            <ThemedView className="w-full p-6">
                <ThemedText title className="text-3xl mb-6">
                    Login
                </ThemedText>

                {!!error && (
                    <View className="bg-red-100 dark:bg-red-900 p-4 rounded-lg mb-4">
                        <ThemedText className="text-red-600 dark:text-red-200 text-center">
                            {error}
                        </ThemedText>
                    </View>
                )}

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(t) => {
                        setEmail(t);
                        if (error) setError("");
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 p-4 rounded-lg mb-4"
                    placeholderTextColor="#666"
                    editable={!isLoading}
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={(t) => {
                        setPassword(t);
                        if (error) setError("");
                    }}
                    secureTextEntry
                    className="bg-gray-100 dark:bg-gray-800 dark:text-gray-200 p-4 rounded-lg mb-6"
                    placeholderTextColor="#666"
                    editable={!isLoading}
                />

                <Pressable
                    onPress={handleLogin}
                    disabled={isLoading}
                    className={`p-4 rounded-lg mb-4 ${
                        isLoading ? "bg-blue-300" : "bg-blue-500"
                    }`}
                >
                    <ThemedText className="text-white text-center font-bold">
                        {isLoading ? "Logging in..." : "Login"}
                    </ThemedText>
                </Pressable>

                <Link href="/Register" asChild>
                    <Pressable disabled={isLoading}>
                        <ThemedText className="text-center text-blue-500">
                            Don&apos;t have an account? Register
                        </ThemedText>
                    </Pressable>
                </Link>
            </ThemedView>
        </ThemedContainer>
    );
}
