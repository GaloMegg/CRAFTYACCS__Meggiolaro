import { useState, useEffect } from "react";
import ItemList from "./ItemList"
import Loading from "./loading";

const newProducts = [
    {
        "productName": "Ceniceros",
        "price": "$400",
        "description": "Ceniceros de resina",
        "stock": 10
    },
    {
        "productName": "Anillos",
        "price": "$300",
        "description": "Anillos de arcilla",
        "stock": 8
    },
    {
        "productName": "Aros",
        "price": "$200",
        "description": "Aros de alambre",
        "stock": 5
    },

]

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setproducts(newProducts)
            setloading(false)
        }, 2000);
    }, []);

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    } else {
        return (
            <>
                <ItemList data={products} />
            </>
        )
    }
}

export default ItemListContainer
