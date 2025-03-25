import { createContext, useContext } from "react";

export const defaultApiUrl = "http://localhost:5000";

export const ApiContext = createContext(defaultApiUrl);

export function useApiContext() {
    return useContext(ApiContext);
}