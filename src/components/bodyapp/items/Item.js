import { useContext } from "react"
import { Link } from "react-router-dom"
import { firstcontext } from "../../context/Context"

const Item = ({ image, title, price, idb, cartQ, renderLink, idDelete }) => {
    const { DeleteItem } = useContext(firstcontext)
    function HandlerDelete() {
        DeleteItem(idDelete)
    }
    
    return (
        <div className="product__card">
            <img src={image} alt="" className="product__card--img" />
            <p>{title}</p>
            <p>$ {price}</p>
            {cartQ && <p>Cantidad:{cartQ}</p>}
            {idDelete && <button className="buttonCart" onClick={HandlerDelete}>Borrar</button>}
            {renderLink && <Link to={`/prod/product/${idb}`} className="product__card--btn-more">Ver más</Link>}
        </div >
    )
}
export default Item
