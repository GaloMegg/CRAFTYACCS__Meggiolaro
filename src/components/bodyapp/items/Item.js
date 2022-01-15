import { useContext } from "react"
import { Link } from "react-router-dom"
import { firstcontext } from "../../context/Context"
const Item = ({ image, title, price, id, cartQ, renderLink, idDelete }) => {
    const { DeleteItem } = useContext(firstcontext)
    const OnAdd = () => { }
    function HandlerDelete() {
        DeleteItem(idDelete)
    }
    return (
        <div className="product__card">
            <img src={image} alt="" className="product__card--img" />
            <p>{title}</p>
            <p>$ {price}</p>
            {cartQ && <p>{cartQ}</p>}
            {idDelete && <button className="buttonCart" onClick={HandlerDelete}>Borrar</button>}
            {renderLink && <Link to={`/prod/product/${id}`} className="product__card--btn-more">Ver Mas</Link>}
        </div >
    )
}
export default Item
