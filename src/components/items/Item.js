import ItemCount from "./ItemCount"
const Item = ({ data }) => {
    const OnAdd = () => { }
    return (
        data.map((product, index) => {
            product.stock = data.length
            return (
                <div className="product__card" key={product.id}>
                    <img src={`${product.image}`} alt="" className="product__card--img" />
                    <p>{`${product.title}`}</p>
                    <p>{`${product.description}`}</p>
                    <p>{"$" + `${product.price}`}</p>
                    <ItemCount stock={product.stock} initial={1} onAdd={OnAdd} />
                </div>
            )
        }
        )
    )
}

export default Item
