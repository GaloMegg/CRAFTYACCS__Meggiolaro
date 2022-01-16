import Links from "../Links"
import Socialmedia from "./Socialmedia"
const Footer = () => {
    const linkArr = [
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
    return (
        <footer className="footer__footerFlex">
            <div className="footer__linksFlex">
                {linkArr.map((link) => { return (<Links key={link.id} {...link} />) })}
            </div>
            <div className="footer__socialMediaFlex">
                <Socialmedia />
            </div>
        </footer>
    )
}
export default Footer