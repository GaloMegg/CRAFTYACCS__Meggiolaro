import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer";
import Cartwidget from "./components/nav/Cartwidget"

function MainApp() {
    return (
        <>
            <main className="mainDisplay">
                <div className="flexNav">
                    <Cartwidget />
                    <Header />
                    <Nav />
                </div>
                <Landing />
                <Footer />
            </main>
        </>
    );
}
export default MainApp;