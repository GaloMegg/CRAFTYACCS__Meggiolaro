import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";
import Footer from "./components/footer/Footer"



function MainApp() {
    return (
        <>
            <main>
                <div className="flexNav">
                    <Header />
                    <Nav />
                </div>
                <Landing />
                <Footer />
            </main>

        </>
    );
};

export default MainApp