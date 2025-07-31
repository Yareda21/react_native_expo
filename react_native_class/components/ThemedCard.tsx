import { useColorScheme, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";
import image1 from "../assets/images/adaptive-icon.png";
import image2 from "../assets/images/icon.png";

const ThemedCard = () => {
    const colorTheme = useColorScheme();

    const logo = colorTheme === "dark" ? image1 : image2;
    return <Image source={logo} className=" w-[200px] h-[200px]" />;
};

export default ThemedCard;
