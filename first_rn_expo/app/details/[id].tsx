import { movieList } from "@/assets/data/movie";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const MovieDetails = () => {
    const { id } = useLocalSearchParams();
    const singleMovie = movieList.find((movie) => movie.id === id);

    if (!singleMovie) {
        return (
            <View className="flex-1 items-center justify-center p-4">
                <Text className="text-xl text-red-500">Movie not found</Text>
            </View>
        );
    }

    return (
        <View className="flex-1 p-4">
            <View className="bg-white rounded-lg p-4 shadow-sm">
                <Text className="text-2xl font-bold mb-2">
                    {singleMovie.title}
                </Text>
                <Text className="text-gray-600 mb-2">
                    Year: {singleMovie.year}
                </Text>
                <Text className="text-gray-600">
                    Director: {singleMovie.director}
                </Text>
            </View>
        </View>
    );
};

export default MovieDetails;
