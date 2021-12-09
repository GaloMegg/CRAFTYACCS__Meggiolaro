import landingA from "./images/craftylandinga.jpg"
import landingB from "./images/craftylandingb.jpg"


const landing = () => {
    return (
        <section className="landingFlex">
            <img src={landingA} className="landingA"/>
            <img src={landingB} className="landingB"/>
        </section>
    )
}

export default landing
