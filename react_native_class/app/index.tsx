import { Pressable } from "react-native";
import React from "react";
import ThemedView from "@/components/ThemedView";
import { Link } from "expo-router";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";

const index = () => {
    return (
        <ThemedView className=" w-full flex-1 justify-center items-center">
            <ThemedText className="text-2xl ">Welcome to My APP</ThemedText>
            <Spacer />
            <Pressable className=" border px-6  py-3 rounded-lg bg-slate-400">
                <Link href="/Login" className=" text-center w-[100px]">
                    Login{" "}
                </Link>
            </Pressable>
            <Spacer />
            <Pressable className=" border px-6 py-3 rounded-lg bg-slate-400">
                <Link href="/Register" className=" text-center w-[100px]">
                    Register{" "}
                </Link>
            </Pressable>
        </ThemedView>
    );
};

export default index;
