import landing from "./images/craftylanding.jpg"
const Landing = () => {
    return (
            <section className="landingFlex">
                <img src={landing} className="landingA" alt="" />
                <img src={landing} className="landingAb" alt="" />
            </section>
    )
}
export default Landing
