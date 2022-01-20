import { dataBase } from "./Firebase";
import { collection, getDocs, getDoc, query, where } from "firebase/firestore";

export const filteringByCategory = (categ) => {
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

        return finalProduct
    })
}
export const AllProductos = () => {
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
        return finalProduct
    })
}