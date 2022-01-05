import { Link } from "react-router-dom"

const Categories = () => {
    const categoriesList = [
        {
            "urlname": "Electronica",
            "urlParam": "electronics",
            "id": 1
        },
        {
            "urlname": "Accesorios",
            "urlParam": "jewelery",
            "id": 2


        },
        {
            "urlname": "Hombre",
            "urlParam": "men's%20clothing",
            "id": 3


        },
        {
            "urlname": "Mujer",
            "urlParam": "women's%20clothing",
            "id": 4


        }
    ]
    return (
        <div>
            {categoriesList.map((element) => { return (<Link key={element.id} to={`/prod/cat/${element.urlParam}`} className="cat__links"> {element.urlname}  </Link>) })}
        </div>
    )
}

export default Categories
