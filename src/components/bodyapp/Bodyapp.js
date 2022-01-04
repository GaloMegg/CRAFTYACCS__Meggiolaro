import { Routes, Route } from "react-router-dom"
import ItemDetailContainer from "./detail/ItemDetailContainer"
import ItemListContainer from "./items/Itemlistcontainer"
import Landing from "./landing/Landing"

const Bodyapp = () => {
    return (
        <Routes>
            <Route path="/index" element={<Landing />} />
            <Route path="/prod/" element={<ItemListContainer />} />
            <Route path="/prod/:productid" element={<ItemDetailContainer />} />
        </Routes>
    )
}

export default Bodyapp
{/* 

                
                 */}