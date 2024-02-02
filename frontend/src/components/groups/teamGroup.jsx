import OurTeam from "../cards/team";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import { useContext } from "react";
import { TeamContext } from "../../App";

function TeamGroup() {
    const ourTeam = useContext(TeamContext);

    const settings = getSliderSettings({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        removeAutoPlay: false,
        slidesToShowAt1024Breakpoint: 2,
        slidesToShowAt992Breakpoint: 1,
        objectCount: Object.keys(ourTeam).length,
        speed: 500,
        autoplaySpeed: 15000,
    });

    return (
        <>
            {Object.keys(ourTeam).length === 0 ? null : (
                <div className="container py-10">
                    <header className="text-center mb-3">
                        <h2>Our Team</h2>
                        <h6>Meet Our Extraordinary Team</h6>
                    </header>

                    <Slider {...settings}>
                        {ourTeam.map((item) => (
                            <OurTeam
                                name={item.name}
                                position={item.position}
                                image={item.get_image_url}
                                socialList={item.team_social}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
}

export default TeamGroup;
