import Header from "./components/nav/Header";
import Nav from "./components/nav/Nav";
import Landing from "./components/landing/Landing";


function MainApp() {
    return (
        <>
            <div className="flexNav">
                <Header />
                <Nav />
            </div>
            <Landing />
        </>
    );
};

export default MainApp