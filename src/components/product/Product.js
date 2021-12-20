import ItemCount from "./ItemCount"

//ProductGrid is the origin of the props.
const Product = ({ stock }) => {
    return (
        <div className="product__card">
            <img src="" alt="" className="product__card--img" />
            <p>titulo</p>
            <p>description</p>
            <ItemCount stock={stock} initial={1}/>
        </div>
    )
}

export default Product
