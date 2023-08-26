import "./TopPage.css";
import WorkButton from "../WorkButton/WorkButton";
import CarouselTop from "../Carousel/CarouselTop";
const TopPage = () => {
    return (
        <>
            <div id="div-top">
                <div id="logo" >
                    <img src="./Resources/images/logo.png" alt="Alignment Websites" />
                </div>
                <div id="header-text">
                    <span >OBTEN UN SITIO WEB PROFESIONAL<br /> Y POTENCIA TU NEGOCIO</span>
                </div>
                <div id="div-workButton">
                    <WorkButton text={'Trabaja con nosotros'} />
                </div>

                <div id="carousel-header">
                    <CarouselTop />
                </div>

            </div>
        </>)
};

export default TopPage;