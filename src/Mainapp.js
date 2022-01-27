import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import CartWidget from "./components/nav/CartWidget"
import BodyApp from "./components/bodyapp/BodyApp";
import Context from "./components/context/Context";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MainApp() {
    return (
        <main className="mainDisplay">
            <div className="flexNav">
                <header>
                    <Link to="/" className="header links">Crafty Accesorios</Link>
                </header>
                <Nav />
            </div>
            <Context>
                <CartWidget />
                <ToastContainer autoClose={2000} />
                <BodyApp />
            </Context>
            <Footer />
        </main>
    );
}
export default MainApp;


