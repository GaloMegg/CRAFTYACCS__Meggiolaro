import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <header>
                <Link to="/index" className="header links">Crafty Accesorios</Link>
            </header>
        </>
    )
}
export default Header
