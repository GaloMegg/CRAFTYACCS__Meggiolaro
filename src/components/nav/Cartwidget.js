import cartImg from "./images/cart.png";

import React from 'react'

const Cartwidget = (arr) => {
    return (
        <>
            <div className="cartwidgetFlex">
                <img src={cartImg} alt="" className="cartImg" />
                <p>{arr.cart.length}</p>
            </div>
        </>
    )
}
export default Cartwidget