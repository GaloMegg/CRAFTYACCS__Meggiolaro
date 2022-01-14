import { useContext } from "react"
import { firstcontext } from "../../context/Context"
import Item from "../items/Item"

const Cart = () => {
    const { contexReducer } = useContext(firstcontext)
    const { totalPrice, cart } = contexReducer
    return (
        <section className="cartFlex">
            <div className="products--flex ">
                {cart.map((e, i) => {
                    return (
                        <Item key={i} image={e.image} price={e.price} title={e.title} />
                    )
                })}
            </div >
            <p >El total es de {totalPrice}</p>
            <button>soy el bototn para borrar </button>
            <button>confirmar compra</button>
            <button>borrar todo</button>
        </section>
    )
}

export default Cart
