import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Loading from "../items/loading";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebase/Firebase";
import { collection, doc, getDoc, query } from "firebase/firestore";
const ItemDetailContainer = () => {
    const [detail, setDetail] = useState()
    const [loading, setloading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const prodColl = collection(dataBase, "products")
        const filter = doc(prodColl, id)
        const prod = getDoc(filter)
        prod.then((res) => {
            const producto = res.data()
            setDetail(producto)
            setloading(false)
        })
            .catch((err) => console.error(err))
        // const detailRest = fetch(
        //     `https://fakestoreapi.com/products/${id}`);
        // detailRest.then((res) => {
        //     const finalDetail = res.json()
        //     return finalDetail
        // })
        //     .then((finalDetail) => {
        //         setDetail(finalDetail)
        //         setloading(false)
        //     });
    }, []);
    return (loading ? <Loading /> : <ItemDetail {...detail} product={detail} />
    )

}
export default ItemDetailContainer
