import cartImg from "./images/cart.png";

import React from 'react'
import { Link } from "react-router-dom";

const Cartwidget = (arr) => {
    return (
        <article className="cartwidgetFlex">
            <Link to={"/cart"}>
                <img src={cartImg} alt="" className="cartImg" />
                <p>{arr.cart.length}</p>
            </Link>
        </article>
    )
}
export default Cartwidget