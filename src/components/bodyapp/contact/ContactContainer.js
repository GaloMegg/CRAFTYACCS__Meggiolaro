import { useCallback, useReducer } from "react"
import validator from 'validator';
import Contact from "./Contact"
const ContactContainer = () => {
    const [state, dispatch] = useReducer(Reducer, {
        "userName": true,
        "userSurname": true,
        "userPhone": true,
        "userEmail": true,
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

    const ValidationName = useCallback((e) => {
        let validation = validator.isAlpha(e.target.value)
        if (!validation) {
            dispatch("userNameNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userNameOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }, [state.userName])
    const ValidationSurname = useCallback((e) => {
        let validation = validator.isAlpha(e.target.value)
        if (!validation) {
            dispatch("userSurnameNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userSurnameOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }, [state.userSurname])
    const ValidationPhone = useCallback((e) => {
        let validation = validator.isNumeric(e.target.value)
        if (!validation) {
            dispatch("userPhoneNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userPhoneOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }, [state.userPhone])
    const ValidationEmail = useCallback((e) => {
        let validation = validator.isEmail(e.target.value)
        if (!validation) {
            dispatch("userEmailNotOk")
            dispatch("buttonNotAllowed")
        }
        else {
            dispatch("userEmailOk")
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }, [state.userEmail])
    return (
        <section>
            <Contact ValidationName={ValidationName} ValidationSurname={ValidationSurname} ValidationPhone={ValidationPhone} ValidationEmail={ValidationEmail}   {...state} />
        </section>
    )
}
export default ContactContainer
