import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import CartWidget from "./components/nav/CartWidget"
import Bodyapp from "./components/bodyapp/Bodyapp";
import Context from "./components/context/Context";

function MainApp() {
    return (
        <Context>
            <main className="mainDisplay">
                <CartWidget />
                <div className="flexNav">
                    <Header />
                    <Nav />
                </div>
                <Bodyapp />
                <Footer />
            </main>
        </Context>
    );
}
export default MainApp;