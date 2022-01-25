import { memo } from "react";

const CheckoutForm = ({ ValidationName, ValidationSurname, ValidationPhone, ValidationDni, ValidationEmail, ValidationAddress, ValidationZip, userName, userSurname, userPhone, userDNI, userAddress, userEmail, userZip, }) => {
    return (
        <>
            <input type="text" name="userName" placeholder="Nombre" className={userName ? "form__try" : "notValid"} required onChange={ValidationName} onBlur={ValidationName} />
            <input type="text" name="surname" placeholder="Apellido" className={userSurname ? "form__try" : "notValid"} required onChange={ValidationSurname} onBlur={ValidationSurname} />
            <input type="number" name="phone" placeholder="Telefono" className={userPhone ? "form__try" : "notValid"} required onChange={ValidationPhone} onBlur={ValidationPhone} />
            <input type="number" name="zip" placeholder="Codigo Postal" className={userZip ? "form__try" : "notValid"} required onChange={ValidationZip} onBlur={ValidationZip} />
            <input type="number" name="dni" placeholder="DNI" className={userDNI ? "form__try" : "notValid"} required onChange={ValidationDni} onBlur={ValidationDni} />
            <input type="text" name="address" placeholder="Direccion" className={userAddress ? "form__try" : "notValid"} required onChange={ValidationAddress} onBlur={ValidationAddress} />
            <input type="email" name="email" placeholder="Email" className={userEmail ? "form__try" : "notValid"} required onChange={ValidationEmail} onBlur={ValidationEmail} />
        </>
    )
        ;
};

export default memo(CheckoutForm);
