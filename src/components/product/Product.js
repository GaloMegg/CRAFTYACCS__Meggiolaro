import ItemCount from "./ItemCount"

//ProductGrid is the origin of the props.
const Product = ({ stock }) => {
    const OnAdd = ()=>{}
    return (
        <div className="product__card">
            <img src="" alt="" className="product__card--img" />
            <p>titulo</p>
            <p>description</p>
            <ItemCount stock={stock} initial={1} onAdd={OnAdd}/>
        </div>
    )
}

export default Product
