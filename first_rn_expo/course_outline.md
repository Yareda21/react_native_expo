# React Native with Expo Course Outline

> This repository contains the course materials and exercises for a React Native mobile app development class. The course focuses on building modern mobile applications using Expo and NativeWind (Tailwind CSS for React Native) for styling. Each class builds upon the previous one, gradually introducing more complex concepts and practical implementations.

## Course Overview

-   **Framework**: React Native with Expo
-   **Styling**: NativeWind (Tailwind CSS for React Native)
-   **Target**: Mobile App Development
-   **Level**: Beginner to Intermediate

## Prerequisites

### Required Knowledge

-   Basic understanding of JavaScript/TypeScript
-   Familiarity with React concepts (components, props, state)
-   Basic understanding of CSS and styling concepts
-   Experience with Git and command line interface

### Development Environment Setup

-   Node.js (LTS version)
-   npm or yarn package manager
-   Expo Go app installed on your mobile device
-   Code editor (VS Code recommended)
-   Git for version control

### Required Accounts

-   GitHub account
-   Expo account
-   (Optional) Apple Developer account for iOS deployment
-   (Optional) Google Play Developer account for Android deployment

## Getting Started

### Installation Steps

1. Install Node.js and npm
2. Install Expo CLI: `npm install -g expo-cli`
3. Install VS Code with recommended extensions:
    - React Native Tools
    - Tailwind CSS IntelliSense
    - ES7+ React/Redux/React-Native snippets

### Recommended Resources

-   [React Native Documentation](https://reactnative.dev/docs/getting-started)
-   [Expo Documentation](https://docs.expo.dev)
-   [NativeWind Documentation](https://www.nativewind.dev)
-   [React Navigation Documentation](https://reactnavigation.org)

---

# React Native with Expo Course Outline

## Class 1: Kickoff – Expo + Core Components + Styling with NativeWind

### Why?

-   Understand the React → React Native shift & Expo's Managed Workflow
-   See how mobile UIs map to familiar web components

### How?

#### Setup & Project Structure

-   Installing Expo CLI vs. CRA
-   expo init anatomy (App.js, app.json, assets/…)

#### Core Components

-   `<View>` vs. `<div>`, `<Text>` vs. `<p>/<h1>`
-   `<Image>` vs. `<img>`, touchables vs. onClick

#### Styling with NativeWind

-   Tailwind syntax in React Native
-   Platform styles (ios:/android:)

### Real Practical Applications

-   Rapid prototyping of mobile screens using Tailwind-style utilities

### In-class Exercise

Scaffold a 2-screen Expo app:

-   Home: logo image + welcome text
-   Profile: avatar + bio text
-   Style both with NativeWind utilities

### Mini-Project

Build a "Student Info" card:

-   Photo
-   Name
-   Course list
-   Use responsive flex layouts

## Class 2: Navigation & Deep Linking

### Why?

-   Mobile apps need stack/tab/drawer flows; web's router won't work

### How?

#### React Navigation Basics

-   Installing @react-navigation/native + Expo adapter
-   Stack vs. Tab vs. Drawer

#### Params & Deep Linking

-   Passing params between screens
-   Configuring Expo's Linking for URL schemes

### Real Practical Applications

-   Designing onboarding flows
-   Profile/settings tabs
-   Shareable links

### In-class Exercise

Add a Tab navigator to your Student Info app:

-   "Home" & "Profile" tabs
-   Navigate from Home → Profile with student ID

### Mini-Project

Extend to a 3-screen flow:

-   Search student list
-   Student detail
-   Edit profile modal (Drawer or Modal presentation)

## Class 3: State & Data Management

### Why?

-   Handle global state, async data, caching—crucial for real-world apps

### How?

#### Context API vs. Redux Toolkit

-   When to pick which in mobile

#### Data Fetching

-   fetch/Axios + Expo's Permissions (if you pull local files)

#### Local Storage

-   AsyncStorage vs. Expo SecureStore for sensitive data

### Real Practical Applications

-   Offline-first student gradebook
-   Token management
-   Sync strategies

### In-class Exercise

-   Fetch a mock "grades" JSON endpoint
-   Store last-fetched timestamp in AsyncStorage and display if data's stale

### Mini-Project

Build a "Notes" feature:

-   Add/edit/delete notes saved to SecureStore

## Class 4: Expo Device APIs

### Why?

-   Mobile UIs need native device features (camera, location, sensors)

### How?

#### Camera & Media

-   expo-camera
-   expo-image-picker

#### Location & Sensors

-   expo-location
-   expo-sensors (accelerometer)

#### Push Notifications

-   expo-notifications setup & permissions

### Real Practical Applications

-   Photo uploads
-   Geotagging
-   Shake-to-refresh
-   Reminders

### In-class Exercise

-   Add camera button to Student Info card: take & display a profile pic
-   Request and show device location on screen

### Mini-Project

Create a "Field Report" screen:

-   Photo
-   GPS
-   Timestamp
-   Notes

## Class 5: Build, Deploy & Capstone

### Why?

-   Ship your app to real devices & stores

### How?

#### Expo for Web vs. Native Builds

-   expo build vs. expo web

#### Over-the-Air Updates

-   expo-updates basics

#### App Store & Play Store Process

-   App IDs
-   Certificates
-   Metadata
-   Screenshots

#### EAS Build & Submit

### Real Practical Applications

-   Rolling out bug fixes
-   New features
-   Campus pilot

### In-class Exercise

Run an OTA update:

-   Bump version
-   Push a style fix to your Student app

### Capstone Project

Combine everything:

-   Multi-screen student directory
-   Auth (SecureStore)
-   Camera + Location report feature
-   Tab-based navigation
-   OTA update simulation

### Homework

-   Polish capstone
-   Prepare store assets (icons, screenshots)
-   Write a short reflection on which features were easiest/hardest and why
