
const Contact = ({ onKeyDownName, validationEmail, OnchangeNumber }) => {


    return (
        <form action="" className="contactForm" >
            <input type="text" id="userName" placeholder="Nombre" className="form__try" required onKeyDown={onKeyDownName} />
            <input type="text" id="secondName" placeholder="Apellido" className="form__try" required onKeyDown={onKeyDownName} />
            <input type="phone" id="phone" placeholder="Telefono" className="form__try" required onKeyDown={OnchangeNumber}/>
            <input type="email" id="email" placeholder="Email" className="form__try" required onChange={validationEmail} />
            <button type="submit" className="contactForm__try">Enviar</button>
            <button type="reset" className="contactForm__try">Borrar</button>
        </form>
    )
}
export default Contact
