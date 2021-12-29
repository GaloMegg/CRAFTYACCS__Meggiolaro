import Item from "../items/Item";

const ItemList = ({ data }) => {
    return (
        <div className="products--flex" >
            <Item data={data}/>
        </div>
    )
}

export default ItemList