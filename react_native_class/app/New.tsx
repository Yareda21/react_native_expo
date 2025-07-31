import React from "react";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";

const New = () => {
    return (
        <ThemedView safeView={true} className=" flex-1 ">
            <ThemedText title={true}>Hello</ThemedText>
        </ThemedView>
    );
};

export default New;
