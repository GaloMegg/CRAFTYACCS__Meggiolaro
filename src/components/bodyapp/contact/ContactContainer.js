import { useReducer, useState } from "react"
import validator from 'validator';
import Contact from "./Contact"
import { dataBase } from "../../../firebase/Firebase"
import { addDoc, collection } from "firebase/firestore"
import { toast } from "react-toastify";
const ContactContainer = () => {
    const [state, dispatch] = useReducer(Reducer, {
        "userName": true,
        "userSurname": true,
        "userPhone": true,
        "userEmail": true,
        "buttonAllowed": false
    })
    const [contact, setContact] = useState({
        userName: "",
        surname: "",
        phone: "",
        email: ""

    });
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
            default:
                return {
                    ...state
                }
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
            setContact({
                ...contact,
                [e.target.name]: e.target.value
            })
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
            setContact({
                ...contact,
                [e.target.name]: e.target.value
            })
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
            setContact({
                ...contact,
                [e.target.name]: e.target.value
            })
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
            setContact({
                ...contact,
                [e.target.name]: e.target.value
            })
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }
    function PushContact(e) {
        toast.success("Nos pondremos en contacto")
        e.preventDefault()
        const doctoAdd = { ...contact }
        const collect = collection(dataBase, "contact")
        const docAdded = addDoc(collect, doctoAdd)
        docAdded.then((res) => {
        })
    }
    return (
        <Contact PushContact={PushContact} ValidationName={ValidationName} ValidationSurname={ValidationSurname} ValidationPhone={ValidationPhone} ValidationEmail={ValidationEmail} {...state} />
    )
}
export default ContactContainer
