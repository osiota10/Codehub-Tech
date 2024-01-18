import React, { useContext } from "react";
import IndustryCard from "../cards/industryCard";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import { IndustryContext } from "../../App";

function IndustryGroup() {
    const industry = useContext(IndustryContext);

    // const settings = getSliderSettings(false, false, 3, false);
    const settings = getSliderSettings({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        removeAutoPlay: false,
        slidesToShowAt1024Breakpoint: 2,
        slidesToShowAt992Breakpoint: 1,
        objectCount: Object.keys(industry).length,
        speed: 500,
        autoplaySpeed: 2000,
    });

    return (
        <>
            {Object.keys(industry).length === 0 ? null : (
                <div className="container py-10">
                    <header className="text-center mb-3">
                        <h2>Industries</h2>
                        <h6>Driving Success Across Diverse Horizons</h6>
                    </header>

                    <Slider {...settings}>
                        {industry.map((item) => (
                            <section>
                                <IndustryCard
                                    key={item.id}
                                    name={item.name_of_industry}
                                    logo={item.get_logo_url}
                                />
                            </section>
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
}

export default IndustryGroup;
