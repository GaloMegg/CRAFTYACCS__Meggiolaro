import Orderitem from "./Orderitem";

const Renderorder = ({ totalPrice, products, client }) => {

    return (
        <div className="orderStatus__flex">
            {products && <p className="orderStatus__text">Total: {totalPrice}</p>}
            {products && <Orderitem products={products} />}
            {client && <div className="orderStatus__client">
                <p className="orderStatus__client--text">
                    Nombre:    {client.userName}
                </p>
                <p className="orderStatus__client--text">
                    Apellido:    {client.surname}
                </p>
                <p className="orderStatus__client--text">
                    Codigo Postal:    {client.zip}
                </p> <p className="orderStatus__client--text">
                    Direccion de envio:    {client.address}
                </p>
            </div>
            }
        </div>);
};

export default Renderorder;
