import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import Loading from "./loading";

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    const { categ } = useParams()
    useEffect(() => {
        const productsRest = fetch(
            `https://fakestoreapi.com/products`)
        productsRest.then((res) => {
            const finalProduct = res.json()
            return finalProduct
        })
            .then((finalProduct) => {
                if (categ) {
                    const filteredproducts = finalProduct.filter((element) => { return element.category === categ })
                    setproducts(filteredproducts)
                } else { setproducts(finalProduct) }
                setloading(false)
            })
    }, [categ]);
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
