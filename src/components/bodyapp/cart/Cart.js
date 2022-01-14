import { useContext } from "react"
import EmptyCart from "./EmptyCart"
import FullCart from "./FullCart"
import { firstcontext } from "../../context/Context"



const Cart = () => {
    const { contextVariables } = useContext(firstcontext)
    const { totalPrice } = contextVariables

    return (
        totalPrice ? <FullCart /> : <EmptyCart />
    )
}

export default Cart
