import React, { useState, useEffect } from 'react'
import IndustryCard from '../cards/industryCard';
import axios from 'axios';
import Slider from 'react-slick';
import { getSliderSettings } from './recentJobGroup';


function IndustryGroup() {
  const [industry, setIndustry] = useState([])
  console.log(industry)
  useEffect(() => {
    // Industries
    axios.get(`${process.env.REACT_APP_API_URL}/industries`)
      .then(res => {
        setIndustry(res.data)
      })
  }, []);

  const settings = getSliderSettings(false, false, 3, false)

  return (
    <>
      {
        Object.keys(industry).length === 0
          ?
          null :
          <div className='container py-10'>
            <header className='text-center mb-3'>
              <h2>Industries</h2>
              <h6>Driving Success Across Diverse Horizons</h6>
            </header>

            <Slider {...settings}>
              {industry.map(item => <section>
                <IndustryCard
                  key={item.id}
                  name={item.name_of_industry}
                  logo={item.get_logo_url}
                />
              </section>)}
            </Slider>
          </div>
      }
    </>
  );
}

export default IndustryGroup;