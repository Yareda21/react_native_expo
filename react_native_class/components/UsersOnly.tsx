import { useUser } from "@/hooks/useUser";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";
import ThemedLoader from "./ThemedLoader";

const UsersOnly = ({ children }: any) => {
    const { user, authChecked } = useUser();
    const router = useRouter();

    // check for user exists
    useEffect(() => {
        if (authChecked && user === null) {
            router.replace("/");
        }
    }, [user, authChecked, router]);

    // if auth is not checked or there is no user, just show loading,
    // dont render, or else it will crush the app because of null values
    if (!authChecked || !user) {
        return (
            // <Text>Loading...</Text>
            <ThemedLoader />
        );
    }

    return children;
};

export default UsersOnly;
