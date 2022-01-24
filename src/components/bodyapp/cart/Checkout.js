import ContactContainer from "../contact/ContactContainer";

const Checkout = ({ state, pushOrder, EmptyCart, totalPrice }) => {
    const confirmOrder = () => {
        const orders = state.map((e) => { return { ...e } })
        pushOrder([orders, totalPrice])
        EmptyCart()
    }

    return (
        <div>
            <p>Compra</p>
            {state.map((e) => {
                return (
                    <div key={e.id} className="checkOut__table">
                        <p>{e.title}</p>
                        <p>{e.quantity}</p>
                    </div>)
            })}
            <ContactContainer Checkout={true} />
            <button onClick={confirmOrder}>Comfirnasfa</button>
        </div >
    );
};

export default Checkout;
