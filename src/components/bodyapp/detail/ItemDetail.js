import { useContext } from "react"
import { firstcontext } from "../../context/Context"
import ItemCount from "./ItemCount"
import { toast } from 'react-toastify';
const ItemDetail = ({ image, title, description, price, product }) => {
    const { AddQuantity, PushCart, TotalPricing } = useContext(firstcontext)
    const ListernerOfQuantity = (counter) => {
        AddQuantity(counter)
        PushCart(product, counter)
        TotalPricing(price, counter)
        if (counter === 1) {
            toast.success("Producto agregado.", {
                className: 'foo-bar'
            })
        }
        else {
            toast.success("Productos agregados.")
        }
    }
    return (
        <div className="detailContainer">
            <img src={image} alt="" className="detailContainer__img" />
            <div className="detailContainer__details">
                {/* <p>{quantity}</p> */}
                <p className="detailContainer--text">{title}:</p>
                <p className="detailContainer--text">{description}</p>
                <p className="detailContainer--text">$ {price}</p>
                <ItemCount initial={1} onAdd={ListernerOfQuantity} />
            </div>
        </div>
    )
}
export default ItemDetail
