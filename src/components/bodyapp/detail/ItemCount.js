import { useState } from "react"
const ItemCount = ({ initial, onAdd }) => {
    const [counter, setcounter] = useState(initial)
    const IncreaseQuantity = () => {
        setcounter(counter + 1)
    }
    const DecreaseQuantity = () => {
        if (counter > 1) {
            setcounter(counter - 1)
        }
    }
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
            <button className="product__card--btn-confirm" onClick={ConfirmQuantity}>Confirmar</button>
        </div>
    )
}
export default ItemCount
