import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setEndpoint("https://fra.cloud.appwrite.io/v1")
    .setProject("684a8727002f8cfa1707") // Your Project ID
    .setPlatform("app.yared.demo"); // Your package name / bundle identifier

export const account = new Account(client);

// Avatars service provides methods to generate and manage user profile pictures
// Features include: default avatar generation, URL generation, and customization options
// Useful for user profiles, chat apps, and comment sections
export const avatars = new Avatars(client);
