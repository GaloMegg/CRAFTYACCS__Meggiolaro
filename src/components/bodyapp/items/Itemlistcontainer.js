import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"
import Loading from "./loading";
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
            const querySel = query(collec, filter)
            const allProdProm = getDocs(querySel)
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
        } else {
            const allReq = collection(dataBase, "products")
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



    }, [categ]);
    return (loading ? <Loading /> : <ItemList data={products} />
    )
}

export default ItemListContainer
