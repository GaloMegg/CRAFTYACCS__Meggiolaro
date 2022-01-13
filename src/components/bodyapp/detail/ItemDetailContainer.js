import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Loading from "../items/loading";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setloading] = useState(true)
    const { id } = useParams()
    useEffect(() => {
        const detailRest = fetch(
            `https://fakestoreapi.com/products/${id}`);
        detailRest.then((res) => {
            const finalDetail = res.json()
            return finalDetail
        })
            .then((finalDetail) => {
                setDetail(finalDetail)
                setloading(false)
            });
    }, []);
    return (loading ? <Loading /> : <ItemDetail {...detail} />
    )

}
export default ItemDetailContainer
