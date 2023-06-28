import React, { useState, useEffect } from 'react'
import IndustryCard from '../cards/industryCard';
import axios from 'axios';
import Slider from 'react-slick';
import { getSliderSettings } from './recentJobGroup';


function IndustryGroup() {
  const [industry, setIndustry] = useState([])

  useEffect(() => {
    // Industries
    axios.get(`https://jsonplaceholder.typicode.com/albums/`)
      .then(res => {
        setIndustry(res.data)
      })
  }, []);

  const settings = getSliderSettings(false, false, 3, false)

  return (
    <>
      <div className='container py-10'>
        <h2 className='text-center mb-8'>Industries</h2>
        <Slider {...settings}>
          {industry.map(item => <section><IndustryCard key={item.id} name={item.title} /></section>)}
        </Slider>
      </div>
    </>
  );
}

export default IndustryGroup;