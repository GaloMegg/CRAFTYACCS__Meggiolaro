import { collection, getDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react';
import { dataBase } from '../../../firebase/Firebase';
import RenderOrder from './RenderOrder';
import Loading from '../items/Loading';

const OrderContainer = () => {
    const [orderNum, setOrderNum] = useState(0);
    const [loading, setLoading] = useState(null);
    const [orderStatus, setOrderStatus] = useState(0);
    const [error, setError] = useState(" ");
    const CheckOrder = (e) => {
        const value = e.target.value
        setOrderNum(value.trim())
    }
    const orderStatusReq = () => {
        setLoading(true)
        const collec = collection(dataBase, "orders")
        const filter = doc(collec, orderNum)
        const order = getDoc(filter)
        order.then((res) => {
            const ord = res.data()
            setOrderStatus(ord)
            ord ? setError(true) : setError(false);
            setLoading(false)
        })
        order.catch(
            (err) => {
                console.log(err)
                setError(true)
            }
        )
    }
    return (
        <div className='order__flex'>
            <p className='order__text'>Busca tu orden</p>
            <p className='order__text'>Ingresa tu numero de orden aquí</p>
            <input type="text" required onChange={CheckOrder} className='order__inputCheck' />
            <button onClick={orderStatusReq} className='order__buttonCheck'>Buscar</button>
            {loading && <Loading lessWidth={true} />}
            {orderStatus && <RenderOrder totalPrice={orderStatus["1"]} products={orderStatus["0"]} client={orderStatus["2"]} />}
            {error || <p className='order__text'>No existe una orden con ese número, intente nuevamente.</p>}
        </div>
    );
};

export default OrderContainer;
