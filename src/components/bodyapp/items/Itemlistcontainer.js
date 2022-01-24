import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import Loading from "./Loading";
import { dataBase } from "../../../firebase/Firebase";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)
    const { categ } = useParams()
    useEffect(() => {
        if (categ) {
            const collec = collection(dataBase, "products")
            const filter = where("category", "==", categ)
            const allReq = query(collec, filter)
            setCategories(allReq)
        }
        else {
            const allReq = collection(dataBase, "products")
            setCategories(allReq)
        }
    }, [categ]);

    const setCategories = (allReq) => {
        const allProdProm = getDocs(allReq)
        allProdProm.then((res) => {
            const prods = res.docs
            const finalProduct = prods.map((e) => {
                return {
                    ...e.data(),
                    idb: e.id
                }
            })
            setproducts(finalProduct)
            setloading(false)
        })
    }

    return (loading ? <Loading /> : <ItemList data={products} />
    )
}

export default ItemListContainer
