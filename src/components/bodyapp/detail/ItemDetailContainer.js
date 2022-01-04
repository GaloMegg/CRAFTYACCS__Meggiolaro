import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail"
import Loading from "../items/loading";

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([])
    const [loading, setloading] = useState(true)
    //I make the request to the API and destructure it to make the item detail rendering way much easier. Spread operator simplifies a lot the work. 
    useEffect(() => {
        const detailRest = fetch(
            'https://fakestoreapi.com/products?limit=1');
        detailRest.then((res) => {
            const finalDetail = res.json()
            return finalDetail
        })
            .then((finalDetail) => {
                const [details] = finalDetail
                setDetail(details)
                setloading(false)
            });
    }, []);
    //I use an othe use effect to avoid the undefined problems on itemdetail.js
    // useEffect(() => {
    // })
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
