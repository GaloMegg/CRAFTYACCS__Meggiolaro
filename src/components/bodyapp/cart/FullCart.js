import { useContext } from "react"
import { Link } from "react-router-dom"
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
                <Link to="/checkout/" className="cart__buttons-try"><button className="cart__buttons-try">Finalizar</button></Link>
            </div>
            <div className="products--flex ">
                {state.map((e) => {
                    return (
                        <Item key={e.id} image={e.image} price={e.price} title={e.title} cartQ={e.quantity} idDelete={e.id} />
                    )
                })}
            </div >
        </section>
    )
}

export default FullCart
