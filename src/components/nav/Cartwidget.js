import cartImg from "./images/cart.png";

import React from 'react'
import { Link } from "react-router-dom";

const Cartwidget = (arr) => {
    return (
        <div className="cartwidgetFlex">
            <Link to={"/cart"}>
                <img src={cartImg} alt="" className="cartImg" />
                <p>{arr.cart.length}</p>
            </Link>
        </div>
    )
}
export default Cartwidget