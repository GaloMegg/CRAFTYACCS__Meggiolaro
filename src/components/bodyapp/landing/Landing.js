import { memo } from "react"
import landingA from "./images/craftylandinga.jpg"
import landingB from "./images/craftylandingb.jpg"
const Landing = () => {
    return (
        <article className="landingFlex">
            <img src={landingA} className="landingA" alt="" />
            <img src={landingB} className="landingB" alt="" />
        </article>
    )
}
export default memo(Landing)
