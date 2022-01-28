import { Routes, Route } from "react-router-dom"
import Cart from "./cart/Cart"
import ContactContainer from "./contact/ContactContainer"
import ItemDetailContainer from "./detail/ItemDetailContainer"
import ItemListContainer from "./items/ItemListContainer"
import Landing from "./landing/Landing"
import WhoWeAre from "./whoweare/WhoWeAre"
import OrderContainer from "./orders/OrderContainer"
import Checkoutcontainer from "./cart/checkout/CheckoutContainer"
import { memo } from "react"
const BodyApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/prod/" element={<ItemListContainer />} />
            <Route path="/prod/cat/:categ" element={<ItemListContainer />} />
            <Route path="/prod/product/:id" element={<ItemDetailContainer />} />
            <Route path="/contact/" element={<ContactContainer />} />
            <Route path="/whoweare/" element={<WhoWeAre />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/checkout/" element={<Checkoutcontainer />} />
            <Route path="/ordersearch/" element={<OrderContainer />} />
        </Routes>
    )
}

export default memo(BodyApp)
