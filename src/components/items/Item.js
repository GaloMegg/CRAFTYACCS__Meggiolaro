import ItemCount from "./ItemCount"
const Item = ({ stock, productName, description, price }) => {
    const OnAdd = () => { }
    return (
        <div className="product__card">
            <img src="" alt="" className="product__card--img" />
            <p>{productName}</p>
            <p>{description}</p>
            <p>{price}</p>
            <ItemCount stock={stock} initial={1} onAdd={OnAdd} />
        </div>
    )
}

export default Item
