import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Loading from "../items/loading";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const detailRest = fetch(
            'https://fakestoreapi.com/products?limit=1')
        detailRest.then((res) => {
            const finalDetail = res.json()
            return finalDetail
        })
            .then((finalDetail) => {
                setDetail(finalDetail)
            })
        setloading(false)
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
                <ItemDetail data={detail} />
            </>
        )
    }
}


export default ItemDetailContainer
