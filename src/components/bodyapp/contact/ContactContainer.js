import { useReducer } from "react"
import validator from 'validator';
import Contact from "./Contact"
const ContactContainer = ({ Checkout}) => {
    const [state, dispatch] = useReducer(Reducer, {
        "userName": true,
        "userSurname": true,
        "userPhone": true,
        "userEmail": true,
        "userZip": true,
        "userDNI": true,
        "userAddress": true,
        "buttonAllowed": false
    })
    function Reducer(state, action) {
        switch (action) {
            case "userNameOk":
                return { ...state, userName: true };
            case "userNameNotOk":
                return { ...state, userName: false };
            case "userSurnameOk":
                return { ...state, userSurname: true };
            case "userSurnameNotOk":
                return { ...state, userSurname: false };
            case "userPhoneOk":
                return { ...state, userPhone: true };
            case "userPhoneNotOk":
                return { ...state, userPhone: false };
            case "userZipOk":
                return { ...state, userZip: true };
            case "userZipNotOk":
                return { ...state, userZip: false };
            case "userDNIOk":
                return { ...state, userDNI: true };
            case "userDNINotOk":
                return { ...state, userDNI: false };
            case "userAddressOk":
                return { ...state, userAddress: true };
            case "userAddressNotOk":
                return { ...state, userAddress: false };
            case "userEmailOk":
                return { ...state, userEmail: true };
            case "userEmailNotOk":
                return { ...state, userEmail: false };
            case "buttonAllowed":
                return { ...state, buttonAllowed: true };
            case "buttonNotAllowed":
                return { ...state, buttonAllowed: false };
        }
    }
    function ValidationName(e) {
        let validation = validator.isAlpha(e.target.value)
        if (!validation) {
            dispatch("userNameNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userNameOk");
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }
    function ValidationSurname(e) {
        let validation = validator.isAlpha(e.target.value)
        if (!validation) {
            dispatch("userSurnameNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userSurnameOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }
    function ValidationPhone(e) {
        let validation = validator.isNumeric(e.target.value)
        if (!validation) {
            dispatch("userPhoneNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userPhoneOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }
    function ValidationZip(e) {
        let validation = validator.isPostalCode(e.target.value, "any")
        if (!validation) {
            dispatch("userZipNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userZipOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }
    function ValidationDni(e) {
        let validation = validator.isNumeric(e.target.value)
        if (!validation) {
            dispatch("userDNINotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userDNIOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }

        }
    }
    function ValidationEmail(e) {
        let validation = validator.isEmail(e.target.value)
        if (!validation) {
            dispatch("userEmailNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userEmailOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }
    return (
        <section>
            <Contact ValidationName={ValidationName} checkout={Checkout} ValidationSurname={ValidationSurname} ValidationPhone={ValidationPhone} ValidationEmail={ValidationEmail} ValidationZip={ValidationZip} ValidationDni={ValidationDni} {...state} />
        </section>
    )
}
export default ContactContainer
