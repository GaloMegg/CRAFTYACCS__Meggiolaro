import Links from "../Links"
import { linkArr } from "../Links"
const Nav = () => {
    
    return (
        <nav className="navFlex">
            {linkArr.map((link) => { return (<Links key={link.id} {...link} />) })}
        </nav>
    )
}
export default Nav
