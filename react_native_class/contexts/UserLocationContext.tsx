import { createContext, ReactNode, useEffect, useState } from "react";
import * as Location from "expo-location";

export const UserLocationContext = createContext<any>(null);

export function UserLocationProvider({ children }: { children: ReactNode }) {
    const [location, setLocation] =
        useState<Location.LocationObjectCoords | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        async function getCurrentLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
        }

        getCurrentLocation();
    }, []);

    return (
        <UserLocationContext.Provider value={{ location, setLocation }}>
            {children}
        </UserLocationContext.Provider>
    );
}
