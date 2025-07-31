import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function Index() {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className=" text-primary text-5xl">Movie Collection</Text>
            <Link href="/class1/movies" className=" border py-2 px-4 bg-red-400 mb-4">
                Movies
            </Link>
            <Link
                href="/class1/profile"
                className=" border py-2 px-4 bg-red-400 mb-4"
            >
                Profiles
            </Link>
            <Link href="/class1/about" className=" border py-2 px-4 bg-red-400 mb-4">
                About
            </Link>
        </View>
    );
}
