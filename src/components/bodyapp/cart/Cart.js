import { useContext } from "react"
import { firstcontext } from "../../context/Context"
import Item from "../items/Item"

const Cart = () => {
    const { contextVariables, EmptyCart } = useContext(firstcontext)
    const { totalPrice, state } = contextVariables

    function Emptycart() {
        EmptyCart()
    }
    return (
        <section className="cartFlex">
            <div className="products--flex ">
                {state && state.map((e, i) => {
                    return (
                        <Item key={i} image={e.image} price={e.price} title={e.title} cartQ={e.quantity} />
                    )
                })}
            </div >
            <p >El total es de {totalPrice}</p>
            <p></p>
            <button>soy el bototn para borrar </button>
            <button>confirmar compra</button>
            <button onClick={Emptycart}>borrar todo</button>
        </section>
    )
}

export default Cart
