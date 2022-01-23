import { useContext } from "react";
import { firstcontext } from "../../context/Context";
import ContactContainer from "../contact/ContactContainer";

const Checkout = ({ state, pushOrder, EmptyCart }) => {
    const confirmorder = () => {
        EmptyCart()
        pushOrder([...state])
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
            <button onClick={confirmorder}>Comfirnasfa</button>
        </div >
    );
};

export default Checkout;
