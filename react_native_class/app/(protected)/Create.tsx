import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";

const Create = () => {
    return (
        <ThemedView className="flex-1 items-center justify-center p-5">
            <ThemedText className="text-2xl font-bold mb-2.5">
                Create New
            </ThemedText>
            <ThemedText className="text-base text-gray-600">
                Add something new to your collection
            </ThemedText>
        </ThemedView>
    );
};

export default Create;
