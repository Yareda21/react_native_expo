import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

import {movieList} from "@/assets/data/movie"

const Movies = () => {
    return (
        <View className="">
            {movieList?.map((movie) => {
                return (
                    <Link
                        className=" p-4 border border-slate-300 rounded-lg  bg-slate-200 m-2"
                        key={movie.id}
                        href={`/details/${movie.id}`}
                    >
                        <Text className=" flex justify-center">
                            {movie.title.toUpperCase()}
                        </Text>
                    </Link>
                );
            })}
        </View>
    );
};

export default Movies;

