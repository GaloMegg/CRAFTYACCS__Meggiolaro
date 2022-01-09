import { useState } from "react"
import validator from 'validator';
import Contact from "./Contact"
const ContactContainer = () => {

    const [status, setStatus] = useState()
    function OnchangeName(e) {
        let validation = validator.isAlpha(e.key)
        if (!validation) {
            e.preventDefault()
        }
    }
    function OnchangeNumber(e) {
        let validation = validator.isNumeric(e.key,true)
        if (!validation && e.key!=="Backspace") {
            e.preventDefault()
        }
    }
    
    function validationEmail(e) {
        let validation = validator.isEmail(e.target.value)
        if (!validation) {
            console.log("lolo")
        }
    }
    return (
        <div>
            <Contact onKeyDownName={OnchangeName} emailValidaiton={validationEmail} OnchangeNumber={OnchangeNumber} />
        </div>
    )
}
export default ContactContainer
