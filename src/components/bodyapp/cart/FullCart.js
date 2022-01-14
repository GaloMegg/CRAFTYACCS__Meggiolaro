import { useContext } from "react"
import { firstcontext } from "../../context/Context"
import Item from "../items/Item"
const FullCart = () => {

    const { contextVariables, EmptyCart } = useContext(firstcontext)
    const { totalPrice, state } = contextVariables
    function Emptycart() {
        EmptyCart()
    }
    return (
        <section className="cartFlex">
            <p className="cart__title">El total es de $ {totalPrice}</p>
            <div className="cart__buttons-flex">
                <button className="cart__buttons-try" onClick={Emptycart}>Limpiar</button>
                <button className="cart__buttons-try">Finalizar</button>
            </div>
            <div className="products--flex ">
                {state.map((e, i) => {
                    return (
                        <Item key={i} image={e.image} price={e.price} title={e.title} cartQ={e.quantity} />
                    )
                })}
            </div >
        </section>
    )
}

export default FullCart
