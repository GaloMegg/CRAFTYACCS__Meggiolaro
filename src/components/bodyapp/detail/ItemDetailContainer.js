import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Loading from "../items/Loading";
import { useParams } from "react-router-dom";
import { dataBase } from "../../../firebase/Firebase";
import { collection, doc, getDoc } from "firebase/firestore";
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
    }, [id]);
    return (loading ? <Loading /> : <ItemDetail {...detail} product={detail} />
    )

}
export default ItemDetailContainer
