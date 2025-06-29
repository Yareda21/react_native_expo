# Appwrite Backend and Safe Area View

## Safe Area View

-   create a file called New.tsx and use customized themed view for safe area view

## Backend Using Appwrite

### appwrite SDK integration

go to appwrite create a project
go to the docs of appwrite for the integration `https://appwrite.io/docs/quick-starts/react-native`
install the packages for the appwrite
`npx expo install react-native-appwrite react-native-url-polyfill`

create a folder called `lib` in the root directory an create a file called `appwrite.js` which serves as an upwrite setting file - <b>Look at the appwrite file</b>

Now lets create a `context` - to give access to login, logout and register function alongside with other functionalities

### Create Context

create a folder called context with useContext component

afteer creating a dummy functions, we go to rootlayout file wrap our app with it and create the custome hooks

### Creating custom hooks

create a folder called `hooks` and inside create a componenet called `useUser.tsx`

### Using the context in Login

go to Login page create the user and console.log the value inside the handleSubmit to see the user to be `null`
that is because there is no logic inside of login function inside of the context

### Logging user in

first lets do `register function`
what do we need when we register an person
`creating an account,`
`creating unique id for the user`

-   to do that
    first lets import the `account` from the appwrite SDK to the context

then import ID from react-native-appwrite module to generate an ID for each user

once we are done with creating login and register function, we need to update the `Login.tsx` and `Register.tsx` component functions

### Login.tsx and Register.tsx handleSubmit function updates

first get the `login` and `register` function from the `useUser` hook for the each components respectively

-   then try registering on the app, it should run the login by default
-   also check on the appwrite website backend on `Auth` section - left side menu

### lets logout now

### loading current user on app start and close & Guestonly and useronly

we need to make the app to detect the user when first starts
inorder to do that we need to create `useEffect` hood on the `context`

second thing we need is a state of `authCheck` so that we know the auth is checked when the app starts

-   now lets create a component that protects the `protected group route`
    inside of component create `Usersonly.tsx`

-   After creating the UserOnly.tsx, go to the `protected group layout` file and wrapp it

-   Now if i am logged in, the login and register page should not be accessed, so for that effect we need `guestOnly.tsx` component that allows gues to access `login` and `register` pages but logged in users cant.

-   After creating the `GuestOnly.tsx` file, we need to wrapp the auth files (login and register) with it, so go to the layout of the auth and wrapp it

### Activity Indicators - Loading screen

-   so an activity indicator is a loading screen by react native that shows spinner
-   we created that loading screen on `GuestOnly` and `UsersOnly`
-   lets create a `themed loading spinner` which is called `activityIndicator`
-   go to the components then create a `ThemedLoader.tsx`

-   after creating the themedLoader component we go to all components that has a `loading`feature and replace all. start with GuestOnly and UsersOnly components

## Practice Exercise: Build a Task Management App

Create a task management application with authentication and protected routes using React Native, Expo, and Appwrite. This exercise will help you practice all the concepts covered in this project.

### Requirements

1. **Authentication System**

    - Implement user registration and login using Appwrite
    - Create protected routes for authenticated users
    - Implement guest-only routes for non-authenticated users
    - Add proper error handling and loading states
    - Implement logout functionality

2. **Task Management Features**

    - Create a dashboard to display all tasks

3. **UI/UX Requirements**

    - Use NativeWind (TailwindCSS) for styling
    - Create themed components:
        - ThemedView
        - ThemedText
        - ThemedContainer
        - ThemedLoader
    - Implement dark mode support
    - Add loading indicators for async operations
    - Show proper error messages
    - Add form validation

4. **Technical Requirements**
    - Use TypeScript for type safety
    - Implement proper state management using Context API
    - Create custom hooks for reusable logic
    - Use Expo Router for navigation
    - Implement proper error boundaries
    - Add proper TypeScript interfaces for all data structures

### Project Structure

```
app/
├── (auth)/
│   ├── Login.tsx
│   └── Register.tsx
├── (protected)/
│   ├── dashboard.tsx
│   │   ├── [id].tsx
│   │   └── new.tsx
│   └── profile.tsx
├── _layout.tsx
└── index.tsx
components/
├── ThemedView.tsx
├── ThemedText.tsx
├── ThemedContainer.tsx
└── ThemedLoader.tsx
contexts/
└── TaskContext.tsx
└── UserContext.tsx
hooks/
├── useUser.tsx
└── useTasks.tsx
lib/
└── appwrite.ts
```

### Learning Objectives

-   Understanding authentication flow in React Native
-   Working with protected routes
-   Managing application state with Context API
-   Creating reusable components and hooks
-   Implementing proper error handling
-   Working with external APIs (Appwrite)
-   Styling with NativeWind
-   TypeScript integration
-   Form handling and validation
-   Async operations and loading states
