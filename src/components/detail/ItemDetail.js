import ItemCount from "../items/ItemCount"
const ItemDetail = ({ image, title, description, price }) => {
    return (
        <div className="detailContainer">
            <img src={image} alt="" className="detailContainer__img"  />
            <div className="">
                <p className="">{title}</p>
                <p className="">{description}</p>
                <p className="">{price}</p>
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    )
}
export default ItemDetail
