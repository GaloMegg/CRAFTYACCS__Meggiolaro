import { useContext } from "react"
import { firstcontext } from "../../context/Context"
import ItemCount from "./ItemCount"

const ItemDetail = ({ image, title, description, price, product, id }) => {
    const { AddQuantity, PushCart, TotalPricing } = useContext(firstcontext)
    const ListernerOfQuantity = (counter) => {
        AddQuantity(counter)
        PushCart(product, counter)
        TotalPricing(price, counter)
    }
    return (
        <div className="detailContainer">
            <img src={image} alt="" className="detailContainer__img" />
            <div className="detailContainer__details">
                {/* <p>{quantity}</p> */}
                <p className="">{title}</p>
                <p className="">{description}</p>
                <p className="">{price}</p>
                <ItemCount stock={10} initial={1} onAdd={ListernerOfQuantity} />
            </div>
        </div>
    )
}
export default ItemDetail
