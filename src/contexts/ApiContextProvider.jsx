import { ApiContext, defaultApiUrl } from "./ApiContext"

export function ApiContextProvider({children}) {

    return (
        <ApiContext.Provider value={import.meta.env.PROD ? "https://deployedsite.com/" : defaultApiUrl } >
            {children}
        </ApiContext.Provider>
    )
}