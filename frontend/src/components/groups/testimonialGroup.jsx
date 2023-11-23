import TestimonialCard from "../cards/testimonials";
import { useContext } from "react";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import { TestimonialContext } from "../../App";

function TeastimonialGroup() {
    const testimonials = useContext(TestimonialContext);

    const sliderSettings = getSliderSettings(false, true, 1, true);

    return (
        <>
            {Object.keys(testimonials).length === 0 ? null : (
                <div className="container py-10">
                    <header className="text-center mb-3">
                        <h2>Testimonials</h2>
                        <h6>What Our Satisfied Customers Have to Say!</h6>
                    </header>

                    <Slider {...sliderSettings}>
                        {testimonials.map((item) => (
                            <TestimonialCard
                                image={item.get_image_url}
                                id={item.id}
                                name={item.name}
                                position={item.position}
                                message={item.message}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
}

export default TeastimonialGroup;
