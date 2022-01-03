import ItemCount from "../items/ItemCount"
const ItemDetail = ({ data }) => {
    const [details] = data
    const { image, description, price, title } = details
    return (
        <div className="detailContainer">
            <img src={image} alt="" className="detailContainer__img" style={{ width: 100 }} />
            <div className="">
                <p className="">{title}</p>
                <p className="">{description}</p>
                <p className="">{price}</p>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetail
