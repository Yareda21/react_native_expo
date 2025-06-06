import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";

export default function Dashboard() {
    return (
        <ThemedView className="flex-1 items-center justify-center p-5">
            <ThemedText className="text-2xl font-bold mb-2.5">
                Protected Dashboard
            </ThemedText>
            <ThemedText className="text-base text-gray-600">
                Welcome to your Dashboard!
            </ThemedText>
        </ThemedView>
    );
}
