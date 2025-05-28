import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Movie Collection",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="movies"
                options={{
                    title: "Movies",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="about"
                options={{
                    title: "About",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="settings"
                options={{
                    title: "Settings",
                    headerShown: true,
                }}
            />
        </Stack>
    );
}
