import { memo } from "react"
import { Link } from "react-router-dom"
export const linkArr = [
    {
        "id": 1,
        "linkName": "Productos",
        "linkClass": "links",
        "route": "prod"
    },
    {
        "id": 2,
        "linkName": "Contacto",
        "linkClass": "links",
        "route": "contact"
    },
    {
        "id": 3,
        "linkName": "¿Quiénes somos?",
        "linkClass": "links",
        "route": "whoweare"
    }
]

const Links = ({ linkName, linkClass, route }) => {

    return (
        <>
            <Link to={`/${route}/`} path="" className={linkClass}>{linkName}</Link>
        </>
    )
}
export default memo(Links)
