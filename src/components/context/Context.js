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
        }
    }


    function AddQuantity(q) {
        setQuantity(quantity + q)
    }
    function PushCart(product, q) {
        let exist = state.cart.findIndex((element) => element.id === product.id)
        if (exist == -1) {
            product.quantity = q
            dispatch({ type: "AddCart", payload: { product: { ...product } } })
            // dispatch({ type: "IncrementQuantity", payload: { product: product, ObjQ: ObjQ } })
        }
        else {
            let newQuantity = [...state.cart]
            newQuantity[exist].quantity += q
            dispatch({ type: "IncrementQuantity", payload: { newQuantity: newQuantity } })
            // dispatch({ type: "IncrementExistentQuantity", payload: { ObjQ: ObjQ } })
        }
    }




    function TotalPricing(price, q) {
        setTotalPrice(totalPrice + (price * q))
    }
    function EmptyCart() {
        setTotalPrice(0)
        // setCart([])
        setQuantity(0)
    }

    const contextVariables = {
        quantity,
        totalPrice,
        state: state.cart
    }



    const fullContext = { contextVariables, AddQuantity, PushCart, TotalPricing, EmptyCart }




    return (
        <Provider value={fullContext}>
            {children}
        </Provider>
    )
}
export default Context
export const firstcontext = createContext()

