# React Native with Expo - Learning Project 📱

This project is designed to help you learn React Native development using Expo. It's a practical guide that covers fundamental concepts and comparisons between web and mobile development.

## Understanding the Basics

### React Native vs Expo

-   **React Native**: A framework for building native mobile applications using JavaScript and React
-   **Expo**: A platform and framework built on top of React Native that simplifies the development process
    -   Provides additional tools and services
    -   Handles complex native configurations automatically
    -   Offers easier testing and deployment options

### React vs React Native Comparison

| React (Web)     | React Native (Mobile) | Description                           |
| --------------- | --------------------- | ------------------------------------- |
| `<div>`         | `<View>`              | Container component for layout        |
| `<p>`, `<span>` | `<Text>`              | Text display component                |
| `<input>`       | `<TextInput>`         | User input component                  |
| `<button>`      | `<TouchableOpacity>`  | Interactive button component          |
| `<img>`         | `<Image>`             | Image display component               |
| `<ul>`, `<ol>`  | `<FlatList>`          | List rendering component              |
| CSS styles      | StyleSheet API        | Styling system                        |
| `onClick`       | `onPress`             | Event handling                        |
| `className`     | `style`               | Styling property                      |
| Flexbox (web)   | Flexbox (mobile)      | Layout system (with some differences) |
| DOM             | Native Views          | Underlying rendering system           |
| Browser APIs    | Native APIs           | Platform-specific functionality       |

Key Differences:

-   React Native uses native components instead of HTML elements
-   Styling is done through JavaScript objects instead of CSS
-   Layout is primarily done using Flexbox
-   No CSS classes or IDs - styles are applied directly
-   No HTML or CSS - everything is JavaScript

### Essential React Native Components

#### Basic Components

-   `<View>`:

    -   The most fundamental component
    -   Similar to `<div>` in web development
    -   Used for layout and container purposes
    -   Supports Flexbox layout
    -   Can be nested to create complex layouts

-   `<Text>`:

    -   Used for displaying text
    -   Must wrap all text content (unlike web where text can be free)
    -   Supports nested text with different styles
    -   Can handle text selection and copying
    -   Supports various text properties (color, size, weight, etc.)

-   `<TextInput>`:
    -   Handles user text input
    -   Similar to `<input>` in web
    -   Supports various keyboard types
    -   Can handle multiline input
    -   Includes features like auto-capitalization and auto-correction

#### Interactive Components

-   `<TouchableOpacity>`:

    -   Creates touchable elements with opacity feedback
    -   Used for buttons and interactive elements
    -   Provides visual feedback on press
    -   Can be customized with different opacity levels

-   `<TouchableHighlight>`:

    -   Similar to TouchableOpacity
    -   Changes background color on press
    -   Good for list items and cards

-   `<TouchableWithoutFeedback>`:
    -   For touch events without visual feedback
    -   Useful for custom touch handling

#### Layout Components

-   `<ScrollView>`:

    -   For scrollable content
    -   Renders all children at once
    -   Good for small lists and content
    -   Supports horizontal and vertical scrolling

-   `<FlatList>`:
    -   For long lists of data
    -   Implements performance optimizations
    -   Only renders items that are currently visible
    -   Supports pull-to-refresh and infinite scroll

#### Media Components

-   `<Image>`:

    -   Displays images
    -   Supports local and remote images
    -   Can handle different image formats
    -   Includes caching and loading states

-   `<ImageBackground>`:
    -   Similar to Image but can contain child components
    -   Useful for background images with content

#### Platform-Specific Components

-   `<Platform.select()`:
    -   For platform-specific code
    -   Allows different implementations for iOS and Android
    -   Can be used for components, styles, or logic

## Project Setup

1. Install dependencies

    ```

    ```
