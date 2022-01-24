import { useContext } from "react";
import { firstcontext } from "../../../context/Context";
import Checkout from "./Checkout";
import { dataBase } from "../../../../firebase/Firebase"
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react/cjs/react.development";
import IdCopy from "../IdCopy";

const Checkoutcontainer = () => {

    const { contextVariables, EmptyCart } = useContext(firstcontext)
    const [id, setId] = useState("");
    const pushOrder = (e) => {
        const doctoAdd = { ...e }
        const collect = collection(dataBase, "orders")
        const docAdded = addDoc(collect, doctoAdd)
        docAdded.then((res) => {
            setId(res.id)
        })
    }


    return (
        id ? <IdCopy id={id} /> : <Checkout {...contextVariables} pushOrder={pushOrder} EmptyCart={EmptyCart} />
    );
};

export default Checkoutcontainer;

