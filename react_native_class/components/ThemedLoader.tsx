import { ActivityIndicator, useColorScheme } from "react-native";
import { Colors } from "@/constants/colors";
import ThemedView from "./ThemedView";

const ThemedLoader = ({ ...props }) => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme ?? "light"];

    return (
        <ThemedView
            safeView={true}
            className=" flex-1 justify-center items-center"
        >
            <ActivityIndicator color={theme.text} size="large" />
        </ThemedView>
    );
};

export default ThemedLoader;
