import Links from "../Links"
import SocialMedia from "./SocialMedia"
import { linkArr } from "../Links"
const Footer = () => {
    return (
        <footer className="footer__footerFlex">
            <div className="footer__linksFlex">
                {linkArr.map((link) => { return (<Links key={link.id} {...link} />) })}
            </div>
                <SocialMedia />
        </footer>
    )
}
export default Footer