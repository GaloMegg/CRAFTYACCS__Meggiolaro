
const Orderitem = ({ products }) => {
    return (
        <section className="orderItem__flex">
            <div className="tableheader__flex">
                <p className="tableItems">Producto</p>
                <p className="tableItems">Cantidad</p>
                <p className="tableItems">Precio Unitario</p>
            </div>
            {
                products.map((e) => {
                    return (
                        <div key={e.id} className="tableheader__flex">
                            <p className="tableItems">{e.title}</p>
                            <p className="tableItems">{e.quantity}</p>
                            <p className="tableItems">{e.price}</p>
                        </div>
                    )
                })
            }
        </section >

    );
};

export default Orderitem;
