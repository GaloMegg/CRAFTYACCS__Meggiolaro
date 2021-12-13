import Links from "../Links"
import Socialmedia from "./Socialmedia"
const Footer = () => {
    return (
        <footer className="footer__footerFlex">
            <div className="footer__linksFlex">
                <Links />
            </div>
            <div className="footer__socialMediaFlex">
                <Socialmedia />
            </div>
        </footer>
    )
}
export default Footer