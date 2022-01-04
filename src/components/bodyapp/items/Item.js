import { Link } from "react-router-dom"

const Item = ({ image, title, price, id }) => {
    const OnAdd = () => { }
    return (
        <div className="product__card">
            <img src={image} alt="" className="product__card--img" />
            <p>{title}</p>
            <p>$ {price}</p>
            <Link to={`/prod/product${id}`} className="product__card--btn-more">Ver Mas</Link>
        </div >
    )
}

export default Item
