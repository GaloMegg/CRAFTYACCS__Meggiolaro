import { Link } from "react-router-dom"

const Links = ({ linkName, linkClass, route }) => {

    return (
        <>
            <Link to={`/${route}/`} path="" className={linkClass}>{linkName}</Link>
        </>
    )
}
export default Links
