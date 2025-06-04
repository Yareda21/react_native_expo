# Class 4 - Authentication Screens Exercise

## Exercise Overview

Create a simple authentication system with Login and Register screens, implementing navigation between them. This exercise will help you understand:

-   Screen navigation in React Native
-   Form handling
-   Basic authentication UI/UX
-   Route organization

## Requirements

### 1. Screen Structure

Create the following screens in your `app` directory:

```
app/
├── index.tsx (Home Screen)
├── (auth)/
│   ├── login.tsx
│   └── register.tsx
└── _layout.tsx
```

### 2. Home Screen (index.tsx)

-   Display a welcome message
-   Add two buttons:
    -   "Login" - navigates to login screen
    -   "Register" - navigates to register screen
-   Use the themed components we created earlier for consistent styling

### 3. Login Screen (login.tsx)

Create a login form with:

-   Email input field
-   Password input field
-   "Login" button
-   "Don't have an account? Register" link
-   Form validation for:
    -   Valid email format
    -   Password length (minimum 6 characters)

### 4. Register Screen (register.tsx)

Create a registration form with:

-   Email input field
-   Password input field
-   Confirm password field
-   "Register" button
-   "Already have an account? Login" link
-   Form validation for:
    -   Valid email format
    -   Password length (minimum 6 characters)
    -   Password confirmation match

## Implementation Guidelines

### Navigation Setup

```typescript
// _layout.tsx
import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="(auth)/login"
                options={{
                    title: "Login",
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="(auth)/register"
                options={{
                    title: "Register",
                    headerShown: true,
                }}
            />
        </Stack>
    );
}
```

### Form Handling

Use React's useState for form management:

```typescript
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
```

### Navigation Using Links

```typescript
import { Link } from "expo-router";

// In your component:
<Link href="/login" asChild>
  <Pressable>
    <ThemedText>Login</ThemedText>
  </Pressable>
</Link>

<Link href="/register" asChild>
  <Pressable>
    <ThemedText>Register</ThemedText>
  </Pressable>
</Link>

// For text links:
<Link href="/login">
  <ThemedText>Don't have an account? Register</ThemedText>
</Link>

<Link href="/register">
  <ThemedText>Already have an account? Login</ThemedText>
</Link>
```

## Styling Guidelines

1. Use the themed components we created earlier:
    - ThemedView for containers
    - ThemedText for text elements
    - ThemedCard for form containers
2. Maintain consistent spacing using the Spacer component
3. Ensure proper contrast for accessibility
4. Add loading states for buttons during form submission

## Bonus Tasks

1. Add password visibility toggle
2. Implement "Remember Me" functionality
3. Add form error messages with animations
4. Create a password strength indicator
5. Add social login options (Google, Facebook)

## Testing Checklist

-   [ ] Navigation works between all screens
-   [ ] Form validation works correctly
-   [ ] Error messages are displayed appropriately
-   [ ] UI is responsive and works on different screen sizes
-   [ ] Theme switching works correctly on all screens
-   [ ] Form inputs are properly styled and accessible

## Resources

-   [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
-   [React Native Form Handling](https://reactnative.dev/docs/textinput)
-   [React Native Navigation](https://reactnavigation.org/)

Remember to commit your changes regularly and test thoroughly on both iOS and Android devices.
