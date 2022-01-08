
const Contact = ({ onKeyDown }) => {


    return (
        <form action="" className="contactForm" >
            <input type="text" id="userName" placeholder="Nombre" className="form__try" required onKeyDown={onKeyDown} />
            <input type="text" id="secondName" placeholder="Apellido" className="form__try" required onKeyDown={onKeyDown} />
            <input type="phone" id="phone" placeholder="Telefono" className="form__try" required />
            <input type="email" id="email" placeholder="Email" className="form__try" required />
            <button type="submit" className="contactForm__try">Enviar</button>
            <button type="reset" className="contactForm__try">Borrar</button>
        </form>
    )
}
export default Contact
