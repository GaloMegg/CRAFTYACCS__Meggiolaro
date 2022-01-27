import landingA from "./images/craftylandinga.jpg"
import landingB from "./images/craftylandingb.jpg"
const Landing = () => {
    return (
        <section className="landingFlex">
            <img src={landingA} className="landingA" alt="" />
            <img src={landingB} className="landingB" alt="" />
        </section>
    )
}
export default Landing
