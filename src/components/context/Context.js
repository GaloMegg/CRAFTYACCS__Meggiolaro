import { createContext, useReducer, useState } from "react"
const Context = ({ children }) => {
    const { Provider } = firstcontext;
    const [totalPrice, setTotalPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [state, dispatch] = useReducer(Reducer,
        {
            cart: [],
        })
    function Reducer(state, action) {
        switch (action.type) {
            case "AddCart":
                return {
                    ...state, cart: [...state.cart, action.payload.product]
                }
            case "IncrementQuantity":
                return {
                    ...state, cart: [...action.payload.newQuantity]
                }
            case "DeleteItem":
                return {
                    ...state, cart: [...action.payload.newCleanArray]
                }
            case "EmptyCart":
                return {
                    cart: action.payload.cart
                }
            default:
                return {
                    ...state
                }
        }
    }
    function AddQuantity(q) {
        setQuantity(quantity + q)
    }
    function PushCart(product, q) {
        let exist = state.cart.findIndex((element) => element.id === product.id)
        if (exist === -1) {
            product.quantity = q
            dispatch({ type: "AddCart", payload: { product: { ...product } } })
        }
        else {
            let newQuantity = [...state.cart]
            newQuantity[exist].quantity += q
            dispatch({ type: "IncrementQuantity", payload: { newQuantity: newQuantity } })
        }
    }
    function DeleteItem(id) {
        let newArray = [...state.cart]
        let newCleanArray = newArray.filter((element) => element.id !== id)
        if (newCleanArray.length === 0) { EmptyCart() }
        else { dispatch({ type: "DeleteItem", payload: { newCleanArray: [...newCleanArray] } }) }
    }
    function TotalPricing(price, q) {
        setTotalPrice(Math.floor(totalPrice + (price * q)))
    }
    function EmptyCart() {
        setTotalPrice(0)
        setQuantity(0)
        dispatch({ type: "EmptyCart", payload: { cart: [] } })
    }
    const contextVariables = {
        quantity,
        totalPrice,
        state: state.cart
    }
    const fullContext = { contextVariables, AddQuantity, PushCart, TotalPricing, EmptyCart, DeleteItem }
    return (
        <Provider value={fullContext}>
            {children}
        </Provider>
    )
}
export default Context
export const firstcontext = createContext()

