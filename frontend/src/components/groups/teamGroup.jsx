import OurTeam from "../cards/team";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";

function TeamGroup() {

    const sliderSettings = getSliderSettings(true, true, 3, true)

    return (
        <div className='container py-10'>
            <h2 className='text-center mb-8'>Our Team</h2>
            <Slider {...sliderSettings}>
                <OurTeam />
                <OurTeam />
                <OurTeam />
                <OurTeam />
                <OurTeam />
            </Slider>
        </div>
    );
}

export default TeamGroup;