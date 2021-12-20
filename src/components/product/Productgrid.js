import Greetings from "./Greetings"
import Product from "./Product"

const Productgrid = () => {
    //Stock of every item rendered
    let stockA = 50;
    let stockB = 25;
    let stockC = 5;
    //Dynamic username associated to the users profile.
    let userName = "Galo"
    return (
        <>
            <div className="greetings--flex" >
                <Greetings greetings={userName} />
            </div>
            <div className="products--flex" >
                <Product stock={stockA} />
                <Product stock={stockB} />
                <Product stock={stockC} />
            </div>
        </>
    )
}

export default Productgrid
