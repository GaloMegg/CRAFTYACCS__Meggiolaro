import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Cartwidget from "./components/nav/Cartwidget"
import Bodyapp from "./components/bodyapp/Bodyapp";

function MainApp() {
    const arr = [{ obj: 1 }, { obj: 2 }, { obj: 3 }, { obj: 4 }, { obj: 4 }, { obj: 4 }]
    return (
        <>
            <main className="mainDisplay">
                <div className="flexNav">
                    <Cartwidget cart={arr} />
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