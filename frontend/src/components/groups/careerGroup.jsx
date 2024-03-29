import { useContext } from "react";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import CareerCard from "../cards/careerInfo";
import { JobOpeningContext } from "../../App";

const CareerGroup = () => {
    const jobOpenings = useContext(JobOpeningContext);

    const settings = getSliderSettings({
        dots: true,
        arrows: true,
        slidesToShow: 3,
        removeAutoPlay: false,
        slidesToShowAt1024Breakpoint: 2,
        slidesToShowAt992Breakpoint: 1,
        objectCount: Object.keys(jobOpenings).length,
        speed: 500,
        autoplaySpeed: 15000,
    });
    return (
        <>
            {Object.keys(jobOpenings).length === 0 ? (
                <section className="container text-center">
                    <h2>We are currently NOT Recruiting</h2>
                    <h6>Stay tuned for future opportunities!</h6>
                </section>
            ) : (
                <section className="container">
                    <header className="text-center mb-3">
                        <h2>Availiable Positions</h2>
                        <h6>Discover our current job openings below</h6>
                    </header>

                    <Slider {...settings}>
                        {jobOpenings.map((item) => (
                            <CareerCard
                                title={item.job_title}
                                deadline={item.deadline}
                                experience={item.years_of_experience}
                                skills={item.skills}
                                slug={item.slug}
                                id={item.id}
                                qualification={item.qualification}
                            />
                        ))}
                    </Slider>
                </section>
            )}
        </>
    );
};

export default CareerGroup;
