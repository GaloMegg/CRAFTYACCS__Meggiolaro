import cart from "./images/cart.png";

import React from 'react'

const Cartwidget = () => {
    return (
        <>
            <div className="cartwidgetFlex">
                <img src={cart} alt="" className="cartImg" />
                <p>1</p>
            </div>
        </>
    )
}

export default Cartwidget
