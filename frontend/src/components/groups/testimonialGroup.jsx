import TestimonialCard from '../cards/testimonials';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { getSliderSettings } from './recentJobGroup';
import axios from 'axios';

function TeastimonialGroup() {

    const [testimonials, setTestimonials] = useState([])

    const sliderSettings = getSliderSettings(false, true, 1, true)

    useEffect(() => {
        // Testimonials
        axios.get(`${process.env.REACT_APP_API_URL}/testimonials`)
            .then(res => {
                setTestimonials(res.data)
            })
    }, [])
    return (
        <>
            {
                Object.keys(testimonials).length === 0
                    ?
                    null :
                    <div className='container py-10'>
                        <h2 className='text-center mb-6'>Testimonials</h2>

                        <Slider {...sliderSettings}>
                            {testimonials.map(item =>
                                <TestimonialCard
                                    image={item.get_image_url}
                                    key={item.id}
                                    name={item.name}
                                    position={item.position}
                                    message={item.message}
                                />
                            )}
                        </Slider>
                    </div>
            }
        </>
    );
}

export default TeastimonialGroup;