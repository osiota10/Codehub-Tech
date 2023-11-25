import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import Stat from "./stat";
import { ServiceContext } from "../../App";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

const pic = {
    url: "https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg?w=826&t=st=1700848458~exp=1700849058~hmac=e681bd4d0a86e85dfa58de699216d425f16de1d11a4612021a64dcb767d380fc",
};

const settings = {
    dots: true,
    arrows: false,
    // className: "center",
    infinite: true,
    // centerPadding: "160px",
    slidesToShow: 1,
    swipeToSlide: true,
    // afterChange: function (index) {
    //     console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //     );
    // },
};

const HeroSection = () => {
    const services = useContext(ServiceContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getStyle = (imgUrl) => {
        const style = {
            backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.0)), url(${imgUrl})`,
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "inset 0 0 0 100vh rgba(235, 237, 240, 0.93)",
        };

        // Conditionally delete properties and values
        if (screenWidth > 991) {
            delete style.boxShadow;
        }

        return style;
    };

    return (
        <Carousel fade>
            {services.map((item) => (
                <Carousel.Item className="hero">
                    <section className="ratio ratio-16x9">
                        <img src={pic.url} className="img-fluid " />
                    </section>
                    <Carousel.Caption className="d-flex  cap">
                        <section className="row align-items-center">
                            <section className="col-lg text-start">
                                <h3 className="text-white">{item.title}</h3>
                                <p>{item.hero_snippet}</p>

                                {Object.keys(item.stats).length === 0 ? null : (
                                    <section className="mt-6 stat-text">
                                        <Stat statList={item.stats} />
                                    </section>
                                )}
                            </section>
                            <section className="col-lg">
                                <img
                                    src={item.get_hero_image_url}
                                    className="img-fluid "
                                />
                            </section>
                        </section>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HeroSection;
