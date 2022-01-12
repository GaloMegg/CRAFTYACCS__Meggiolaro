import whoWeAreImage from "./images/craftyaccslogo.png"
import SocialMedia from "../../Socialmedia"
const Whoweare = () => {
    return (

        <section className="whoweare">
            <div className="whoweare__flex-a">
                <img src={whoWeAreImage} alt="" className="whoweare__flex-a--try" />
            </div>
            <div className="whoweare__flex-b">
                <h3 className="whoweare__flex-b--title">Crafty Accesorios</h3>
                <p className="whoweare__flex-b--slogan"> <i> Lo lindo de crear...</i></p>
                <p className="whoweare__flex-b--description">Somos un grupo de personas dedicadas a la artesania con el objetivo de formar parte de la vida de los clientes, creamos cualquier tipo de proyecto, pero amamos la joyeria de autor y los accesorios personales. Recidimos en la capital de argentina, pero somos del mundo. Internacionales y locos.</p>
            </div>

        </section>
    )
}

export default Whoweare
