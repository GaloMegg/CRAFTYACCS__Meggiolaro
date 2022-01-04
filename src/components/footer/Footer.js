import Links from "../Links"
import Socialmedia from "./Socialmedia"
const Footer = () => {
    const linkArr = [
        {
            "id": 1,
            "linkName": "Productos",
            "class": "links"
        },
        {
            "id": 2,
            "linkName": "Contacto",
            "class": "links"
        },
        {
            "id": 3,
            "linkName": "¿Quiénes somos?",
            "class": "links"
        }
    ]
    return (
        <footer className="footer__footerFlex">
            <div className="footer__linksFlex">
            {linkArr.map((link) => { return (<Links key={link.id} linkName={link.linkName} linkClass={link.class} />) })}
            </div>
            <div className="footer__socialMediaFlex">
                <Socialmedia />
            </div>
        </footer>
    )
}
export default Footer