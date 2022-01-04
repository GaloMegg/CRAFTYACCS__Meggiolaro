import Item from "../items/Item";

const ItemList = ({ data }) => {
    return (
        <div className="products--flex" >
            {data.map((product) => { return (<Item key={product.id} {...product} stock={10} />) })}
        </div>
    )
}

export default ItemList