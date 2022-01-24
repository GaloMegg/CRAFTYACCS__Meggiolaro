import Orderitem from "./Orderitem";

const Renderorder = ({ totalPrice, products }) => {
    return (
        <div className="orderStatus__flex">
            {products && <p className="orderStatus__text">Total: {totalPrice}</p>}
            {products && <Orderitem products={products} />}
        </div>);
};

export default Renderorder;
