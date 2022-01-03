import ItemCount from "./ItemCount"
const Item = ({ srcImg, title, description, price, stock }) => {
    const OnAdd = () => { }
    return (
        <div className="product__card">
            <img src={`${srcImg}`} alt="" className="product__card--img" />
            <p>{`${title}`}</p>
            <p>{`${description}`}</p>
            <p>{"$" + `${price}`}</p>
            <ItemCount stock={stock} initial={1} onAdd={OnAdd} />
        </div>
    )
}

export default Item
