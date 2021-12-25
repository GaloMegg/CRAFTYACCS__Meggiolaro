import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";
import Cartwidget from "./components/nav/Cartwidget"
import ItemListContainer from "./components/items/Itemlistcontainer";



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
                <Landing />
                <ItemListContainer />
                <Footer />
            </main>
        </>
    );
}
export default MainApp;