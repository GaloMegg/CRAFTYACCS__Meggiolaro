import cartImg from "./images/cart.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { firstcontext } from "../context/Context";

const Cartwidget = () => {
    const { contexReducer } = useContext(firstcontext)
    const { quantity } = contexReducer
    return (

        <article className="cartwidgetFlex">

            <img src={cartImg} alt="" className="cartImg" />
            <Link to={"/cart"}>
                <p>{quantity}</p>
            </Link>
        </article>
    )
}
export default Cartwidget