import { useState } from "react"
import validator from 'validator';
import Contact from "./Contact"
const ContactContainer = () => {

    const [status, setStatus] = useState()
    function Onchange(e) {
        let validation = validator.isAlpha(e.key)

        if (!validation) {
            e.preventDefault()
        }
    }
    return (
        <div>
            <Contact onKeyDown={Onchange} />
        </div>
    )
}
export default ContactContainer
