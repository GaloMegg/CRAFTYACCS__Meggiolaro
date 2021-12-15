import Greetings from "./Greetings"
import Product from "./Product"

let userName = "Galo"

const Productgrid = () => {
    return (
        <>
            <div className="greetings--flex" >
                <Greetings greetings={userName} />
            </div>
            <div className="products--flex" >
                <Product />
                <Product />
                <Product />
            </div>
        </>
    )
}

export default Productgrid
