// we need both useContext and the Usercontext

import { useContext } from "react";

import { UserLocationContext } from "@/contexts/UserLocationContext";

export function useLocation() {
    // get all the values from the user context
    const context = useContext(UserLocationContext);
    if (!context) {
        throw new Error(
            "useLocation must be used with in UserLocationProvider!"
        );
    }

    return context;
}
