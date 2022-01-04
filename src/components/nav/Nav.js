import Links from "../Links"
const Nav = () => {
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
        <nav className="navFlex">
            {linkArr.map((link) => { return (<Links key={link.id} {...link} />) })}
        </nav>
    )
}
export default Nav
