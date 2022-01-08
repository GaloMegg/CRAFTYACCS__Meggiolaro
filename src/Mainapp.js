import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import CartWidget from "./components/nav/CartWidget"
import Bodyapp from "./components/bodyapp/Bodyapp";

function MainApp() {
    const arr = [{ obj: 1 }, { obj: 2 }, { obj: 3 }, { obj: 4 }, { obj: 4 }, { obj: 4 }]
    return (
        <>
            <main className="mainDisplay">
                <div className="flexNav">
                    <CartWidget cart={arr} />
                    <Header />
                    <Nav />
                </div>
                <Bodyapp />
                <Footer />
            </main>
        </>
    );
}
export default MainApp;