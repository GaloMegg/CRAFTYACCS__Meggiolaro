import Copy from "./images/copy.png"
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const IdCopy = ({ id }) => {
    const handleClikcID = () => {
        navigator.clipboard.writeText(id)
        toast.success("¡Su numero fue copiado con exito!")
    }
    return (
        <div className='idCopy'>
            <p className='idCopy__advice'>Tu orden ya fue creada, recibirás tu pedido dentro de 3 días <strong>hábiles</strong>...</p>
            <section className='idCopy__numberFlex'>
                <p className='idCopy__copyFlex--text'>Este es tu número de pedido.</p>
                <div className='idCopy__copyFlex' onClick={handleClikcID}>
                    <p className='idCopy__copy-id'><i>{id}</i></p>
                    <img src={Copy} alt="" className='idCopy__copy--img' />
                </div>
            </section>
            <p className=''>¡Copialo y guardalo en un lugar seguro!</p>
            <Link to="/ordersearch/" className="id__link">Consultá tu pedido aquí</Link>
        </div>
    );
};
export default IdCopy;
