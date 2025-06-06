# Class 4 - Authentication Screens Exercise

## Exercise Overview

Create a simple authentication system with Login and Register screens, implementing navigation between them. This exercise will help you understand:

-   Screen navigation in React Native
-   Form handling
-   Basic authentication UI/UX
-   Route organization
-   Protected routes and authentication flow

## Requirements

### 1. Screen Structure

Create the following screens in your `app` directory:

```
app/
├── index.tsx (Home Screen)
├── (auth)/
│   ├── login.tsx
│   └── register.tsx
├── (protected)/
│   └── dashboard.tsx
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
-   On successful login, navigate to the protected dashboard

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

### 5. Protected Dashboard (dashboard.tsx)

Create a protected dashboard screen that:

-   Is only accessible after successful authentication
-   Includes authentication check on mount
-   Redirects to login if not authenticated
-   Displays protected content
-   Can be accessed after successful login

## Implementation Guidelines

See the following files for implementation details:

-   `_layout.tsx` - Navigation setup and screen configuration
-   `(auth)/login.tsx` - Login form implementation
-   `(auth)/register.tsx` - Registration form implementation
-   `(protected)/dashboard.tsx` - Protected route implementation

## Testing Checklist

-   [ ] Navigation works between all screens
-   [ ] Form validation works correctly
-   [ ] Error messages are displayed appropriately
-   [ ] UI is responsive and works on different screen sizes
-   [ ] Theme switching works correctly on all screens
-   [ ] Form inputs are properly styled and accessible
-   [ ] Protected route redirects to login when not authenticated
-   [ ] Successful login navigates to protected dashboard

## Resources

-   [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
-   [React Native Form Handling](https://reactnative.dev/docs/textinput)
-   [React Native Navigation](https://reactnavigation.org/)

Remember to commit your changes regularly and test thoroughly on both iOS and Android devices.
