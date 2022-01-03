import Item from "../items/Item";

const ItemList = ({ data }) => {
    return (
        <div className="products--flex" >
            {data.map((product) => { return (<Item key={product.id} srcImg={product.image} title={product.title} description={product.description} price={product.price} stock={10} />) })}
        </div>
    )
}

export default ItemList