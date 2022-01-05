import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./detail/ItemDetailContainer"
import ItemListContainer from "./items/Itemlistcontainer"
import Landing from "./landing/Landing"

const Bodyapp = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/prod/" element={<ItemListContainer />} />
            <Route path="/prod/cat/:categ" element={<ItemListContainer />} />
            <Route path="/prod/product/:id" element={<ItemDetailContainer />} />
        </Routes>
    )
}

export default Bodyapp
