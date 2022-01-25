import { Link } from "react-router-dom"
const Categories = () => {
    const categoriesList = [
        {
            "urlname": "Ceniceros",
            "urlParam": "ashtray",
            "id": 1
        },
        {
            "urlname": "Anillos",
            "urlParam": "ring",
            "id": 2
        },
        {
            "urlname": "Aros",
            "urlParam": "earring",
            "id": 3
        },
        {
            "urlname": "Collares",
            "urlParam": "necklace",
            "id": 4
        }
    ]
    return (
        <div className="cat">
            {categoriesList.map((element) => { return (<Link key={element.id} to={`/prod/cat/${element.urlParam}`} className="cat__links"> {element.urlname}  </Link>) })}
        </div>
    )
}
export default Categories
