import { Link } from "react-router-dom"

import { linkArr } from "../../Links"
const EmptyCart = () => {
    const [product, ,] = linkArr
    return (
        <section className="cartFlex">
            <p className="cart__title"> ¡No tienes productos en el carrito!</p>
            <div className="cart__buttons-flex">
                <Link to={`/${product.route}/`} className={`cart__buttons-try ${product.linkClass}`} >Productos</Link>
            </div>
            <Link to="/ordersearch/" className="cart__links">Consulta tu pedido</Link>
        </section >
    )
}

export default EmptyCart
