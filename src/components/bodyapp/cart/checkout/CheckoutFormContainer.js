import { useReducer, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import validator from 'validator';

const CheckoutFormContainer = ({ confirmOrder }) => {
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
    const [orderData, setOrderData] = useState({
        userName: "",
        surname: "",
        phone: "",
        zip: "",
        dni: "",
        address: "",
        email: "",
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
            setOrderData({
                ...orderData,
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
            setOrderData({
                ...orderData,
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
            setOrderData({
                ...orderData,
                [e.target.name]: e.target.value
            })
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
            setOrderData({
                ...orderData,
                [e.target.name]: e.target.value
            })
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
            setOrderData({
                ...orderData,
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
            setOrderData({
                ...orderData,
                [e.target.name]: e.target.value
            })
            if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
        }
    }
    function ValidationAddress(e) {
        dispatch("userAddressOk")
        setOrderData({
            ...orderData,
            [e.target.name]: e.target.value
        })
        if (state.userName && state.userSurname && state.userPhone && state.userEmail) { dispatch("buttonAllowed") }
    }
    function ConfirmData(e) {
        e.preventDefault()
        confirmOrder(orderData)

    }
    return (
        <form className="checkoutForm--flex checkoutForm" onSubmit={ConfirmData}>
            <CheckoutForm ValidationName={ValidationName} ValidationSurname={ValidationSurname} ValidationPhone={ValidationPhone} ValidationEmail={ValidationEmail} ValidationZip={ValidationZip} ValidationDni={ValidationDni} ValidationAddress={ValidationAddress} ConfirmData={ConfirmData} {...state} />
            <button className="btn" disabled={!state.buttonAllowed && true}>Confirmar</button>
        </form>
    );
};

export default CheckoutFormContainer;
