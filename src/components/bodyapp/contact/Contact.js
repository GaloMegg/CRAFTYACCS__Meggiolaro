
const Contact = ({ PushContact, ValidationName, ValidationSurname, ValidationPhone, ValidationEmail, userName, userSurname, userPhone, userEmail, buttonAllowed, }) => {

    return (
        <form action="" className="contactForm" onSubmit={PushContact}>
            <input type="text" name="userName" placeholder="Nombre" className={userName ? "form__try" : "notValid"} required onChange={ValidationName} onBlur={ValidationName} />
            <input type="text" name="surname" placeholder="Apellido" className={userSurname ? "form__try" : "notValid"} required onChange={ValidationSurname} onBlur={ValidationSurname} />
            <input type="text" name="phone" placeholder="Telefono" className={userPhone ? "form__try" : "notValid"} required onChange={ValidationPhone} onBlur={ValidationPhone} />
            <input type="email" name="email" placeholder="Email" className={userEmail ? "form__try" : "notValid"} required onChange={ValidationEmail} onBlur={ValidationEmail} />
            <div className="contactForm__try-button-flex">
                <button type="reset" className="contactForm__try-button">Borrar</button>
                <button type="" className="contactForm__try-button" disabled={!buttonAllowed && true}>Enviar</button>
            </div>
        </form >
    )
}
export default Contact