# React Native Movie App Setup Notes

## Initial Setup

1. Reset the project to remove boilerplate code:
    ```bash
    npm run reset-project
    ```

## Styling Configuration

### Required Dependencies

Install the following packages for styling and animations:

```bash
npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context
```

### Purpose of Each Package

-   **NativeWind**: Tailwind CSS for React Native
-   **TailwindCSS**: Utility-first CSS framework
-   **React Native Reanimated**: Advanced animations library
-   **React Native Safe Area Context**: Handles safe area insets for different devices

## Design Resources

-   **Figma Design Link**: [Movie App Design](https://www.figma.com/design/c6NHYQem8G59odVSijIjl2/Movie-App-w--React-Native?node-id=2-2&p=f&t=XYKsEqygeLB3WBCC-0)
    -   Contains the complete UI/UX design for the movie application
    -   Includes all components, layouts, and styling guidelines

## Custmizing tailwind css

head to tailwind.config.js to add custom commands

## Routing and Navigation in react native

similar to Next.js
a file in app folder is your route and the file name is url point to the resource
eg.
app.tsx is your home page so / is the url
register.tsx file can be redirected by /register

exercise, create a file called user.tsx and use a link in the home page to navigate to users page

### how about Dynamic routing and passing parameters

create a file called movie.tsx and create a link to go to this page inside the home page

<b>What if i want to send the name of the movie from the home page?</b>
this time we create a dynamic page by wrapping id with in the []
so create a folder called movie and inside create a file with the name '[id].tsx' which indicates dynamic id will be passed

create - movie/[id].tsx - use useLocalSearchParams() to get the id
on home page - link - /movie/avengers

# React Native Navigation Exercise

## Task: Create a Movie Collection App

### Part 1: Basic Setup

1. Create the following pages in your app directory:
    - `app.tsx` (Home page)
    - `movies.tsx` (Movies list page)
    - `profile.tsx` (User profile page)

### Part 2: Static Navigation

1. On the home page (`app.tsx`):

    - Add a header with the title "Movie Collection"
    - Create three navigation buttons:
        - "Browse Movies" (links to `/movies`)
        - "My Profile" (links to `/profile`)
        - "About" (links to `/about`)

2. On the movies page (`movies.tsx`):

    - Display a list of 5 movie titles
    - Each movie should be clickable and link to its detail page
    - Add a "Back to Home" button

3. On the profile page (`profile.tsx`):
    - Display a user profile card with:
        - Image
        - Username
        - Email
        - Favorite movie count
    - Add a "Back to Home" button

### Part 3: Dynamic Routing

1. Create a dynamic movie details page:

    - Create a folder called `movie`
    - Inside it, create `[id].tsx`
    - Use `useLocalSearchParams()` to get the movie ID
    - Display movie details based on the ID

2. On the movies page:
    - Update the movie list to use dynamic links
    - Example: `/movie/avengers`, `/movie/inception`, etc.

### Part 4: Advanced Navigation

1. Create a nested route:

    - Create a folder called `settings`
    - Inside it, create:
        - `index.tsx` (main settings page)
        - `notifications.tsx` (notification settings)
        - `privacy.tsx` (privacy settings)

2. On the profile page:
    - Add a "Settings" button that links to `/settings`
    - In the settings page, add links to the sub-pages

### Bonus Challenge

1. Implement a breadcrumb navigation system
2. Add a loading state when navigating between pages
3. Create a 404 page for invalid routes

### Requirements

-   Use proper styling with NativeWind
-   Implement safe area handling
-   Add basic animations for page transitions
-   Ensure all navigation links work correctly
-   Handle the back button properly on each page

### Tips

-   Use the `Link` component from Expo Router for navigation
-   Implement proper error handling for invalid routes
-   Consider using a layout file for shared UI elements
-   Test navigation on both iOS and Android
