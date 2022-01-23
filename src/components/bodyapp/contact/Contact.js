const Contact = ({ ValidationName, ValidationSurname, ValidationPhone, ValidationZip, ValidationDni, ValidationEmail, userName, userSurname, userPhone, userEmail, userZip, userDNI, userAddress, buttonAllowed, checkout, }) => {



    return (
        <form action="" className="contactForm" >
            {/* name */}
            <input type="text" id="userName" placeholder="Nombre" className={userName ? "form__try" : "notValid"} required onChange={ValidationName} onBlur={ValidationName} />
            {/* surname */}
            <input type="text" id="surname" placeholder="Apellido" className={userSurname ? "form__try" : "notValid"} required onChange={ValidationSurname} onBlur={ValidationSurname} />
            {/* Phone */}
            <input type="number" id="phone" placeholder="Telefono" className={userPhone ? "form__try" : "notValid"} required onChange={ValidationPhone} onBlur={ValidationPhone} />
            {/* Zip code */}
            {checkout && <input type="number" id="zip" placeholder="Codigo Postal" className={userZip ? "form__try" : "notValid"} required onChange={ValidationZip} onBlur={ValidationZip} />}
            {/* DNI */}
            {checkout && <input type="number" id="dni" placeholder="DNI" className={userDNI ? "form__try" : "notValid"} required onChange={ValidationDni} onBlur={ValidationDni} />}
            {/* Address */}
            {checkout && <input type="text" id="address" placeholder="Direccion" className={userAddress ? "form__try" : "notValid"} required onChange={ValidationPhone} onBlur={ValidationPhone} />}
            {/* Email */}
            <input type="email" id="email" placeholder="Email" className={userEmail ? "form__try" : "notValid"} required onChange={ValidationEmail} onBlur={ValidationEmail} />
            {/* Buttons */}
            {checkout || < div className="contactForm__try-button-flex">
            <button type="reset" className="contactForm__try-button">Borrar</button>
            <button type="" className="contactForm__try-button" disabled={!buttonAllowed && true} >Enviar</button>
        </div>}
        </form >
    )
}
export default Contact