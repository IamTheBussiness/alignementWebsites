import Carousel from "react-bootstrap/Carousel"
import "./CarouselTop.css"

const CarouselTop = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="img-carousel d-block w-25 h-20"
                    src="../../Resources/images/1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-carousel d-block w-25"
                    src="../../Resources/images/1.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="img-carousel d-block w-25"
                    src="../../Resources/images/1.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselTop;