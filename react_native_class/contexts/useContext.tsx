// first import the context
import { createContext, useState, ReactNode } from "react";
import { account } from "@/lib/appwrite";
import { ID } from "react-native-appwrite";

interface UserContextType {
    user: null | any;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
}

// invoke the context to create new UserContext
export const UserContext = createContext<UserContextType | null>(null);

// creating Provider Component
// - for allow us to track user states
// - pass functions into contextProvider which wrapps all the app

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserContextType | null>(null);

    async function register(email: string, password: string) {
        try {
            await account.create(ID.unique(), email, password);
            console.log(`registered`);
            await login(email, password);
        } catch (error) {
            console.log("Registration error:", error);
            throw error; // Re-throw the error to handle it in the component
        }
    }
    async function login(email: string, password: string) {
        try {
            await account.createEmailPasswordSession(email, password);
            const response = await account.get();
            setUser(response);
            console.log("User loged in");
        } catch (error) {
            console.log(error);
        }
    }
    async function logout() {}

    return (
        <UserContext.Provider value={{ user, login, logout, register }}>
            {children}
        </UserContext.Provider>
    );
}
