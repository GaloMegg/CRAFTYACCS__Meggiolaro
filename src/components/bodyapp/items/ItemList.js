import Item from "../items/Item";
import Categories from "./categories/Categories";
const ItemList = ({ data }) => {
    return (
        <>
            <div>
                <Categories/>
                <div className="products--flex" >
                    {data.map((product) => { return (<Item key={product.id} {...product} stock={10} renderLink={true}/>) })}
                </div>
            </div>
        </>
    )
}
export default ItemList