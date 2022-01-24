import { useContext } from "react"
import { firstcontext } from "../../context/Context"
import EmptyCart from "./EmptyCart"
import FullCart from "./FullCart"

const Cart = () => {
    const { contextVariables } = useContext(firstcontext)
    const { totalPrice } = contextVariables
    return (
        totalPrice ? <FullCart /> : <EmptyCart />
    )
}

export default Cart
