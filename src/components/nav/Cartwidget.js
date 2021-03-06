import cartImg from "./images/cart.png";
import { Link } from "react-router-dom";
import { memo, useContext } from "react";
import { firstcontext } from "../context/Context";

const Cartwidget = () => {
    const { contextVariables } = useContext(firstcontext)
    const { quantity } = contextVariables
    return (
        <article className="cartwidgetFlex">
            <Link to={"/cart"} className="cartwidgetLink">
                <img src={cartImg} alt="" className="cartImg" />
                <p className="cartQ">{quantity}</p>
            </Link>
        </article>
    )
}
export default memo(Cartwidget)