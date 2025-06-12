# Protected Route Implementation

This directory contains the protected routes implementation for the React Native Expo application. The protected routes are wrapped in a tab-based navigation system that requires authentication to access.

## Directory Structure

```
(protected)/
├── _layout.tsx      # Main tab navigation layout
├── Books/           # Books tab screen
├── Create/          # Create tab screen
└── dashboard/       # Profile tab screen
```

## Setup Instructions

1. **Create Protected Directory**

    ```bash
    mkdir -p app/(protected)
    ```

2. **Install Required Dependencies**

    ```bash
    npx expo install expo-router @expo/vector-icons
    ```

3. **Create Tab Layout**
    - Create `_layout.tsx` in the protected directory
    - Implement tab navigation using `expo-router`
    - Configure tab icons using `@expo/vector-icons`

## Features

### Tab Navigation

-   **Books Tab**: Access to book-related features
-   **Create Tab**: Create new content
-   **Profile Tab**: User profile and settings

### Theme Support

-   Automatic dark/light mode support
-   Customizable tab bar colors
-   Dynamic icon colors based on theme

### Tab Bar Configuration

-   Custom tab bar height (110px)
-   Top padding (10px)
-   Dynamic background color
-   Focused and unfocused icon states

## Usage

The protected routes are automatically wrapped in authentication checks. To access these routes:

1. Ensure user is authenticated
2. Navigate to any protected route using:

    ```typescript
    import { router } from "expo-router";

    // Navigate to Books tab
    router.push("/(protected)/Books");

    // Navigate to Create tab
    router.push("/(protected)/Create");

    // Navigate to Profile tab
    router.push("/(protected)/dashboard");
    ```

## Customization

### Tab Icons

Icons are implemented using `@expo/vector-icons` with the Ionicons set. To change icons:

1. Import desired icon set from `@expo/vector-icons`
2. Update the `tabBarIcon` prop in the respective `Tabs.Screen` component

### Theme Colors

Colors are managed through the `Colors` constant. To modify colors:

1. Update the color values in `constants/colors.ts`
2. Colors will automatically apply to the tab bar and icons

## Best Practices

1. Always keep authentication checks in place
2. Use consistent icon naming conventions
3. Maintain theme consistency across all protected routes
4. Follow the established directory structure for new protected routes
