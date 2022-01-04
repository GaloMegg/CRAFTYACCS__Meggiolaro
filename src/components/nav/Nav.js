import Links from "../Links"
const Nav = () => {
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
        <nav className="navFlex">
            {linkArr.map((link) => { return (<Links key={link.id} linkName={link.linkName} linkClass={link.class} />) })}
        </nav>
    )
}
export default Nav
