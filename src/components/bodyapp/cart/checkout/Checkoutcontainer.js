import { useContext } from "react";
import { firstcontext } from "../../../context/Context";
import Checkout from "./Checkout";
import { dataBase } from "../../../../firebase/Firebase"
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import IdCopy from "../IdCopy";
import { Navigate } from "react-router-dom";
const Checkoutcontainer = () => {
    const { contextVariables, EmptyCart } = useContext(firstcontext)
    const [id, setId] = useState("");
    const pushOrder = (elements) => {
        const doctoAdd = { ...elements }
        const collect = collection(dataBase, "orders")
        const docAdded = addDoc(collect, doctoAdd)
        docAdded.then((res) => {
            setId(res.id)
            EmptyCart()
        })
    }

    if (id === "" && contextVariables.totalPrice === 0) {
        return (<Navigate to="/" />)
    }
    else {
        return (<>
            {id ? <IdCopy id={id} /> : <Checkout {...contextVariables} pushOrder={pushOrder} EmptyCart={EmptyCart} />}
        </>);
    }
};
export default Checkoutcontainer;

