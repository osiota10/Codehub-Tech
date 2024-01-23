import { useContext } from "react";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import CareerCard from "../cards/careerInfo";

const CareerGroup = () => {
    const availablePositions = 3;
    const settings = getSliderSettings({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        removeAutoPlay: false,
        slidesToShowAt1024Breakpoint: 2,
        slidesToShowAt992Breakpoint: 1,
        objectCount: Object.keys(availablePositions).length,
        speed: 500,
        autoplaySpeed: 15000,
    });
    return (
        <section className="container">
            <header className="text-center mb-3">
                <h2>Availiable Positions</h2>
                <h6>Checkout the available positions below</h6>
            </header>

            <Slider {...settings}>
                <CareerCard />
                <CareerCard />
                <CareerCard />
            </Slider>
        </section>
    );
};

export default CareerGroup;
