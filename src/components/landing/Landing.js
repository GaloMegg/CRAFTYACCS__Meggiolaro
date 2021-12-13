import landingA from "./images/craftylandinga.jpg"
import landingB from "./images/craftylandingb.jpg"


const landing = () => {
    return (
        <article className="landingFlex">
            <img src={landingA} className="landingA" alt=""/>
            <img src={landingB} className="landingB" alt=""/>
        </article>
    )
}

export default landing
