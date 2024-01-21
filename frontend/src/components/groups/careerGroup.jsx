import { useContext } from "react";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";

const CareerGroup = () => {
    return (
        <section className="container">
            <header className="text-center mb-3">
                <h2>Availiable Positions</h2>
                <h6>Checkout the available positions below</h6>
            </header>
        </section>
    );
};

export default CareerGroup;
