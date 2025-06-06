# Class 5 - Tabs and their Navigation

## Setting up Tab Navigation in React Native Expo

### Step 1: Create Protected Folder Structure

1. Create a new folder called `(protected)` inside the `app` directory
2. Inside the `(protected)` folder, create three new files:
    - `Books.tsx`
    - `Create.tsx`
    - `dashboard.tsx`

### Step 2: Create Screen Components

1. Create basic screen components in each file using themed components:
    - Use `ThemedView` and `ThemedText` components for consistent theming
    - Implement basic layout with centered content
    - Reference the existing screen components in the `(protected)` folder

### Step 3: Create Layout File

1. Create `_layout.tsx` inside the `(protected)` folder
2. This file will handle the tab navigation configuration and theming

### Step 4: Configure Tab Navigation

1. In `_layout.tsx`:

```tsx
import React from "react";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/colors";
import { useColorScheme } from "react-native";

const TabLayout = () => {
    const themeColor = useColorScheme();
    const theme = Colors[themeColor ?? "light"];

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    paddingTop: 10,
                    height: 90,
                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor,
            }}
        >
            <Tabs.Screen name="Books" options={{ title: "Books" }} />
            <Tabs.Screen name="Create" options={{ title: "Create" }} />
            <Tabs.Screen name="dashboard" options={{ title: "Profile" }} />
        </Tabs>
    );
};

export default TabLayout;
```

### Step 5: Understanding the Layout Configuration

The tab navigation layout includes:

-   Three main tabs: Books, Create, and Profile
-   Custom styling for the tab bar including:
    -   Background color based on theme
    -   Custom height and padding
    -   Different colors for active and inactive tabs
-   Theme support using `useColorScheme` hook
-   Hidden header for a cleaner look

### Step 6: Testing

1. Run your application
2. You should see three tabs at the bottom of the screen
3. Test navigation between different tabs
4. Verify that the theme changes work correctly in both light and dark mode

### Additional Notes

-   Make sure you have the required dependencies installed:
    -   expo-router
    -   react-native
-   The tab navigation uses the file-based routing system of Expo Router
-   Each tab corresponds to a file in the `(protected)` folder
-   The `_layout.tsx` file defines the navigation structure and styling
-   Use themed components throughout the app for consistent styling and better dark/light mode support
