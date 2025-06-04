# Class 3 - Themed UI Components

This class focuses on creating reusable themed components to maintain consistent styling across the application.

## Overview

Instead of adding styling to individual elements, we create themed components that can be reused throughout the application. This approach ensures consistency and makes theme management more maintainable.

## Components Structure

The components are organized in a dedicated `components` folder. Here's what we'll create:

### 1. ThemedView Component

A base component that handles theme-based background colors.

```typescript
// ThemedView.tsx
import { useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

interface ThemedViewProps {
    children: React.ReactNode;
    style?: any;
}

export const ThemedView = ({ children, style, ...props }: ThemedViewProps) => {
    const themeColor = useColorScheme();
    const theme = Colors[themeColor ?? "light"];

    return (
        <View style={[{ backgroundColor: theme.background }, style]} {...props}>
            {children}
        </View>
    );
};
```

### 2. ThemedText Component

A flexible text component that can handle both title and normal text styles.

```typescript
// ThemedText.tsx
interface ThemedTextProps {
    title?: boolean;
    children: React.ReactNode;
}

export const ThemedText = ({ title, children, ...props }: ThemedTextProps) => {
    const theme = Colors[colorTheme ?? "light"];
    const textColor = title ? theme.title : theme.text;

    return (
        <Text style={{ color: textColor }} {...props}>
            {children}
        </Text>
    );
};
```

### 3. Dynamic Theme Components

For components that need to change based on the theme (like images):

```typescript
// Example of dynamic image rendering
const logo = colorTheme === "dark" ? image1 : image2;
return <Image source={logo} className="w-[200px] h-[200px]" />;
```

### 4. Utility Components

Simple but useful components like the Spacer:

```typescript
// Spacer.tsx
export const Spacer = () => <View className="w-full h-[40px]" />;
```

## Best Practices

1. Always use themed components for consistent styling
2. Make components flexible with props for customization
3. Use TypeScript interfaces for better type safety
4. Keep components focused and single-purpose
5. Document component props and usage

## Implementation Notes

-   Components should be reusable and configurable
-   Use TypeScript for better type safety and development experience
-   Consider accessibility when implementing themed components
-   Test components in both light and dark themes

For detailed implementation, refer to the code in the components directory.
