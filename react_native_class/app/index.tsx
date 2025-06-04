import { Pressable } from "react-native";
import React from "react";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import Spacer from "@/components/Spacer";

const index = () => {
    return (
        <ThemedView className=" w-full flex-1 justify-center items-center">
            <Pressable className=" border px-6 py-3 rounded-lg bg-slate-400">
                <Link href="/Login">Login </Link>
            </Pressable>
            <Spacer />
            <Pressable className=" border px-6 py-3 rounded-lg bg-slate-400">
                <Link href="/Register">Register </Link>
            </Pressable>
        </ThemedView>
    );
};

export default index;
