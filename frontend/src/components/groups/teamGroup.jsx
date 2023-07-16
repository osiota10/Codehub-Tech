import OurTeam from "../cards/team";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import { useState, useEffect } from "react";
import axios from "axios";

function TeamGroup() {
    const [ourTeam, setOurTeam] = useState([])

    useEffect(() => {
        //Our Team
        axios.get(`${process.env.REACT_APP_API_URL}/our-teams`)
            .then(res => {
                setOurTeam(res.data)
            })
    }, [])

    const sliderSettings = getSliderSettings(true, true, 3, true)

    return (
        <>
            {
                Object.keys(ourTeam).length === 0
                    ?
                    null
                    :
                    <div className='container py-10'>
                        <h2 className='text-center mb-6'>Our Team</h2>
                        <Slider {...sliderSettings}>
                            {ourTeam.map((item) =>
                                <OurTeam
                                    name={item.name}
                                    position={item.position}
                                    image={item.get_image_url}
                                    socialList={item.team_social}
                                />
                            )}
                        </Slider>
                    </div>
            }
        </>
    );
}

export default TeamGroup;