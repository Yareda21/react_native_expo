import { Text, useColorScheme } from "react-native";
import React from "react";
import { Colors } from "@/constants/colors";

const ThemedText = ({title=false, ...props }) => {
    const colorTheme = useColorScheme();

    // now lets see if the text is title
    const theme = Colors[colorTheme ?? "light"];
    
    const textColor = title ? theme.title : theme.text;


    return <Text style={{ color: textColor }} {...props} />;
};

export default ThemedText;
