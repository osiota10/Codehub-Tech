import TestimonialCard from '../cards/testimonials';
import { useContext } from 'react';
import { TestimonialContext } from '../../App';
import Slider from 'react-slick';
import { getSliderSettings } from './recentJobGroup';

function TeastimonialGroup() {
    const test = useContext(TestimonialContext)
    const items = Object.values(test);

    const sliderSettings = getSliderSettings(false, true, 1, true)

    return (
        <div className='container py-10'>
            <h2 className='text-center mb-8'>Testimonials</h2>

            <Slider {...sliderSettings}>
                {items.map(item => <TestimonialCard image={item.avatar} key={item.id} />)}
            </Slider>
        </div>
    );
}

export default TeastimonialGroup;