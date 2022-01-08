import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import Loading from "./loading";

const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    const { categ } = useParams()
    useEffect(() => {
        let url
        if (categ) {
            url = `https://fakestoreapi.com/products/category/${categ}`;
        }
        else if (categ == undefined || categ === "all") {
            url = `https://fakestoreapi.com/products`;
        };
        const productsRest = fetch(url)
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
