import { createContext } from "react"

const Context = ({ children }) => {
    const { Provider } = createContext()

    return (
        <Provider value={0}>
            {children}
        </Provider>
    )
}

export default Context
