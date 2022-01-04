import { useState, useEffect } from "react";
import ItemList from "./ItemList"
import Loading from "./loading";

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const productsRest = fetch(
            `https://fakestoreapi.com/products?limit=${5}`)
        productsRest.then((res) => {
            const finalProduct = res.json()
            return finalProduct
        })
            .then((finalProduct) => {
                setproducts(finalProduct)
                setloading(false)
            })

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
