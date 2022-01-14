import { useState } from "react"
const ItemCount = ({ stock, initial, onAdd }) => {

    //Item counter state
    const [counter, setcounter] = useState(initial)
    //Handler funtion to increase the quantity of the item selected.
    const IncreaseQuantity = () => {
        if (counter < stock) {
            setcounter(counter + 1)
        }
    }
    //Handler funtion to decrease the quantity of the item selected.
    const DecreaseQuantity = () => {
        if (counter > 1) {
            setcounter(counter - 1)
        }
    }
    //Handler funtion that (in the future) push to the cart, modify CartWidget and reset the numer of the quantity of the item selected.
    const ConfirmQuantity = () => {
        setcounter(1)
        onAdd(counter)

    }
    return (
        <div className="product__flex">
            <div className="product__card--add">
                <button className="product__card--btn" onClick={DecreaseQuantity}>-</button>
                <p className="product__card--text" >{counter}</p>
                <button className="product__card--btn" onClick={IncreaseQuantity}> +</button>
            </div>
            <button className="product__card--btn-confirm" onClick={ConfirmQuantity}>Confirm</button>
        </div>
    )
}
export default ItemCount
