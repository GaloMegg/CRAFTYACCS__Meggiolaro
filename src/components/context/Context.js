import { createContext, useReducer, useState } from "react"


const Context = ({ children }) => {
    const { Provider } = firstcontext;
    const [contexReducer, dispatch] = useReducer(Reducer, {
        quantity: 0,
        totalPrice: 0,
        cart: []
    })
    // const [quantity, setQuantity] = useState(0)
    // const [totalPrice, setTotalPrice] = useState(0)
    function Reducer(contexReducer, action) {
        switch (action.type) {
            case "AddQuantity":
                return {
                    ...contexReducer,
                    quantity: contexReducer.quantity + action.realquantity
                }
            case "AddCart":
                return { ...contexReducer, cart: [...contexReducer.cart, ...action.payload.prev] }
            case "TotalPricing":
                return {
                    ...contexReducer, totalPrice: contexReducer.totalPrice + (action.payload.price * action.payload.quantity)
                }
            default:
                return {
                    ...contexReducer,
                    quantity: 2
                }
        }
    }
    function AddQuantity(q) {
        dispatch({ type: "AddQuantity", realquantity: q })
    }
    function PushCart(producto) {
        dispatch({ type: "AddCart", payload: { prev: [producto] } })
    }
    function TotalPricing(price, q) {
        dispatch({ type: "TotalPricing", payload: { price: price, quantity: q } })
    }

    const fullContext = { contexReducer, AddQuantity, PushCart, TotalPricing }
    return (
        <Provider value={fullContext}>
            {children}
        </Provider>
    )
}
export default Context
export const firstcontext = createContext()

