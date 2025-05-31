# React Native Theming with Dark and Light Mode

## Overview

This project demonstrates how to implement a responsive theme system in React Native using Expo Router and NativeWind, supporting both dark and light modes.

## Theme Configuration

### 1. Device Theme Detection

-   In `app.json`, the setting `"userInterfaceStyle": "automatic"` enables automatic theme detection based on device settings
-   Use the `useColorScheme()` hook from React Native to access the current theme:

```typescript
const colorTheme = useColorScheme(); // Returns 'dark' or 'light'
```

### 2. Theme Colors Setup

Two approaches to define theme colors:

#### A. Using Constants (colors.js)

```javascript
export const Colors = {
    dark: {
        text: "#d4d4d4",
        title: "#fff",
        background: "#252231",
        // ... other colors
    },
    light: {
        text: "#625f72",
        title: "#201e2b",
        background: "#e0dfe8",
        // ... other colors
    },
};
```

#### B. Using Tailwind Config (tailwind.config.js)

```javascript
module.exports = {
    theme: {
        extend: {
            colors: {
                dark: {
                    text: "#d4d4d4",
                    // ... other colors
                },
                light: {
                    text: "#625f72",
                    // ... other colors
                },
            },
        },
    },
};
```

## Implementation

### 1. Root Layout Styling

-   Apply theme styles in the root layout to affect all routes
-   Use StatusBar component for proper status bar theming:

```typescript
import { StatusBar } from "expo-status-bar";

// In your root layout
<StatusBar style="auto" />;
```

### 2. Screen-Specific Styling

-   Use a combination of inline styles and NativeWind classes
-   Inline styles for theme-dependent styles:

```typescript
style={{ backgroundColor: theme.background }}
```

-   NativeWind classes for static styles:

```typescript
className = "flex-1 p-6 space-y-4";
```

### 3. Best Practices

-   Keep theme colors in a centralized location
-   Use semantic color names (e.g., 'text', 'background' instead of hex codes)
-   Combine NativeWind with inline styles for optimal theming
-   Test both themes thoroughly

## Exercise: Create a Profile Screen

Create a new profile screen that implements the following requirements:

1. Create a new file `app/profile.tsx`
2. Implement a profile screen with:
    - Profile header with avatar placeholder
    - User information section
    - Settings section
    - Logout button
3. Requirements:
    - Must support both dark and light themes
    - Use NativeWind for layout and static styles
    - Use theme colors for dynamic styles
    - Include proper spacing and typography
    - Add navigation from the home screen
    - Implement a simple avatar placeholder using a colored circle

### Bonus Challenges:

1. Add theme toggle button
2. Implement smooth theme transition animations
3. Add more interactive elements (buttons, toggles)
4. Create a custom hook for theme management

### Expected Folder Structure:

```
app/
├── _layout.tsx
├── index.tsx
├── about.tsx
└── profile.tsx
constants/
└── colors.js
```

### Tips:

-   Use the existing theme system
-   Follow the same styling patterns as the About and Index pages
-   Test both themes before submitting
-   Keep the UI clean and consistent with existing screens

