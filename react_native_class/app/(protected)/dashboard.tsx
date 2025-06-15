import { useUser } from "@/hooks/useUser";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { Pressable } from "react-native";
import { useState } from "react";

export default function Dashboard() {
    const { logout, user } = useUser();
    const [isLoading, setIsLoading] = useState(false);
    return (
        <ThemedView className="flex-1 items-center justify-center p-5">
            <ThemedText className="text-2xl font-bold mb-2.5">
                Protected Dashboard
                {user.email}
            </ThemedText>
            <ThemedText className="text-base text-gray-600">
                Welcome to your Dashboard!
            </ThemedText>
            <Pressable
                onPress={logout}
                className={`${
                    isLoading ? "bg-blue-300" : "bg-blue-500"
                } p-4 rounded-lg mb-4`}
                disabled={isLoading}
            >
                <ThemedText className="text-white text-center font-bold">
                    {isLoading ? "Logging Out..." : "Logout"}
                </ThemedText>
            </Pressable>
        </ThemedView>
    );
}
