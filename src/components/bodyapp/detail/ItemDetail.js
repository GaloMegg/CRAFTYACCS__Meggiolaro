import { useState } from "react"
import ItemCount from "../items/ItemCount"
const ItemDetail = ({ image, title, description, price }) => {
    const [quantity, setQuantity] = useState(0)
    const ListernerOfQuantity = (counter) => {
        let a = counter + quantity
        setQuantity(a)
    }
    return (
        <div className="detailContainer">
            <img src={image} alt="" className="detailContainer__img" />
            <div className="detailContainer__details">
                <p>{quantity}</p>
                <p className="">{title}</p>
                <p className="">{description}</p>
                <p className="">{price}</p>
                <ItemCount stock={10} initial={1} onAdd={ListernerOfQuantity} />
            </div>
        </div>
    )
}
export default ItemDetail
