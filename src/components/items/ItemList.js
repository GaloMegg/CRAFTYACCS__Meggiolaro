import Item from "../items/Item";

const ItemList = ({ data }) => {
    return (
        <div className="products--flex" >
            <Item stock={data[0].stock} productName={data[0].productName} description={data[0].description} price={data[0].price} />
            <Item stock={data[1].stock} productName={data[1].productName} description={data[1].description} price={data[1].price} />
            <Item stock={data[2].stock} productName={data[2].productName} description={data[2].description} price={data[2].price} />
        </div>
    )
}

export default ItemList