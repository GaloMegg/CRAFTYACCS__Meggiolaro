import React from 'react';
import Copy from "./images/copy.png"
import { toast } from 'react-toastify';

const IdCopy = ({ id }) => {

    const handleClikcID = () => {
        navigator.clipboard.writeText(id)
        toast.success("¡Su numero fue copiado con exito!")
    }
    return (
        <div className='idCopy'>
            <p className='idCopy__advice'>Tu orden ya fue creada, recibiras tu pedido dentro de 3 dias <strong>hábiles</strong>...</p>
            <section className='idCopy__numberFlex'>
                <p className='idCopy__copyFlex--text'>Este es tu numero de pedido.</p>
                <div className='idCopy__copyFlex' onClick={handleClikcID}>
                    <p className='idCopy__copy-id'><i>{id}</i></p>
                    <button className='idCopy__copy--button' ><img src={Copy} alt="" className='idCopy__copy--img' /></button>
                </div>
            </section>
            <p className=''>¡Copialo y guarlado en un lugar seguro!</p>
        </div>
    );
};

export default IdCopy;
