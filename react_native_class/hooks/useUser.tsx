// we need both useContext and the Usercontext

import { useContext } from "react";
import { UserContext } from "@/contexts/useContext";


export function useUser () {
    // get all the values from the user context
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser must be used with in UserProvider!")
    }

    return context
}