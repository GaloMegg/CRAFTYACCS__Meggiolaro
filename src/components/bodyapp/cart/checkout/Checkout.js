import CheckoutFormContainer from "./CheckoutFormContainer";

const Checkout = ({ state, pushOrder, totalPrice }) => {
    const confirmOrder = (data) => {
        const orders = state.map((e) => { return { ...e } })
        pushOrder([orders, totalPrice, data])
    }
    return (
        <div className="checkoutOrderFlex">
            <p>Compra</p>
            <p>Total: $ {totalPrice}</p>
            {state.map((e) => {
                return (
                    <div key={e.id} className="checkOut__table">
                        <p>{e.title}</p>
                        <p>{e.quantity}</p>
                        <p>{e.price}</p>
                    </div>)
            })}
            <CheckoutFormContainer confirmOrder={confirmOrder} />
        </div >
    );
};

export default Checkout;
