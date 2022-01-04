const Item = ({ srcImg, title, price }) => {
    const OnAdd = () => { }
    return (
        <div className="product__card">
            <img src={srcImg} alt="" className="product__card--img" />
            <p>{title}</p>
            <p>$ {price}</p>
        </div>
    )
}

export default Item
