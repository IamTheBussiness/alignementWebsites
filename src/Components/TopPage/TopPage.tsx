import "./TopPage.css";
import WorkButton from "../WorkButton/WorkButton";
const TopPage = () => {
    return (
        <>

            <div id="div-top">
                <div id="logo" >
                    <img src="./Resources/images/logo.png" alt="Alignment Websites" />
                </div>
                <p id="header-text"> OBTEN UN SITIO WEB PROFESIONAL Y POTENCIA TU NEGOCIO</p>
                <WorkButton text={'Trabaja con nosotros'} />

            </div>

        </>)
};

export default TopPage;