import Header from "./nav/Header";
import Nav from "./nav/Nav";
import Landing from "./landing/Landing";


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