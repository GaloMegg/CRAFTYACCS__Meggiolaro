const Contact = ({ ValidationName, ValidationSurname, ValidationPhone, ValidationEmail, buttonAllowed, userName, userSurname, userPhone, userEmail, }) => {
    return (
        <form action="" className="contactForm" >
            {/* name */}
            <input type="text" id="userName" placeholder="Nombre" className={userName ? "form__try" : "notValid"} required onChange={ValidationName} onBlur={ValidationName} />
            {/* secondName */}
            <input type="text" id="surname" placeholder="Apellido" className={userSurname ? "form__try" : "notValid"} required onChange={ValidationSurname} onBlur={ValidationSurname} />
            {/* Phone */}
            <input type="phone" id="phone" placeholder="Telefono" className={userPhone ? "form__try" : "notValid"} required onChange={ValidationPhone} onBlur={ValidationPhone} />
            {/* Email */}
            <input type="email" id="email" placeholder="Email" className={userEmail ? "form__try" : "notValid"} required onChange={ValidationEmail} onBlur={ValidationEmail} />
            {/* Buttons */}
            <div className="contactForm__try-button-flex">
                <button type="reset" className="contactForm__try-button">Borrar</button>
                <button type="submit" className="contactForm__try-button" disabled={!buttonAllowed && true}>Enviar</button>
            </div>
        </form>
    )
}
export default Contact