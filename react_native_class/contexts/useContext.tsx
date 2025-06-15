// first import the context
import { createContext, useState, ReactNode, useEffect } from "react";
import { account } from "@/lib/appwrite";
import { ID, AppwriteException } from "react-native-appwrite";

interface UserContextType {
    user: null | any;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<any>;
    authChecked: boolean;
}

// invoke the context to create new UserContext
export const UserContext = createContext<UserContextType | null>(null);

// creating Provider Component
export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<null | any>(null);
    const [authChecked, setAuthChecked] = useState(false);

    async function register(email: string, password: string) {
        try {
            await account.create(ID.unique(), email, password);
            return await login(email, password);
        } catch (err: unknown) {
            console.log("Registration error:", err);
            const message =
                err instanceof AppwriteException
                    ? err.message
                    : err instanceof Error
                    ? err.message
                    : String(err);
            throw new Error(message); // normalize error
        }
    }

    async function login(email: string, password: string) {
        try {
            // create session
            await account.createEmailPasswordSession(email, password);
            // fetch user account data
            const response = await account.get();
            setUser(response);
            return response;
        } catch (err: unknown) {
            console.log("Login error in context:", err);
            const message =
                err instanceof AppwriteException
                    ? err.message
                    : err instanceof Error
                    ? err.message
                    : String(err);
            throw new Error(message); // normalize error
        }
    }

    async function logout() {
        try {
            await account.deleteSession("current");
        } finally {
            setUser(null);
        }
    }

    async function getInitialUserValue() {
        try {
            const response = await account.get();
            setUser(response);
        } catch {
            setUser(null);
        } finally {
            setAuthChecked(true);
        }
    }

    useEffect(() => {
        getInitialUserValue();
    }, []);

    return (
        <UserContext.Provider
            value={{ user, login, logout, register, authChecked }}
        >
            {children}
        </UserContext.Provider>
    );
}
