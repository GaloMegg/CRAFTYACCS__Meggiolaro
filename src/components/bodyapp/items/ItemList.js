import Item from "../items/Item";
import Categories from "./categories/Categories";
const ItemList = ({ data }) => {
    return (
        <>
            <Categories />
            <div className="products--flex" >
                {data.map((product) => { return (<Item key={product.id} {...product} stock={10} renderLink={true} />) })}
            </div>
        </>
    )
}
export default ItemList