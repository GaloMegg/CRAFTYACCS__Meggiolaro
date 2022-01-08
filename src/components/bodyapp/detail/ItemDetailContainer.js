import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Loading from "../items/loading";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setloading] = useState(true)
    const { id } = useParams()
    //I make the request to the API and destructure it to make the item detail rendering way much easier. Spread operator simplifies a lot the work. 
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
    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    }
    else {
        return (
            <>
                <ItemDetail {...detail} />
            </>
        )
    }
}
export default ItemDetailContainer
