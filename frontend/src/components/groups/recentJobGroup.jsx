import React, { useContext } from 'react';
import RecentJobCard from '../cards/recentJobCard';
import Slider from "react-slick";
import { JobContext } from '../../App';
import { Link } from 'react-router-dom';

export const getSliderSettings = (dots, arrows, slidesToShow, removeAutoPlay) => {
  const sliderSettings = {
    dots: dots,
    arrows: arrows,
    className: "center",
    infinite: true,
    centerPadding: "160px",
    slidesToShow: slidesToShow,
    swipeToSlide: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    afterChange: (index) => {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  // Conditionally hide some properties
  if (removeAutoPlay) {
    delete sliderSettings.autoplay;
    delete sliderSettings.speed;
    delete sliderSettings.autoplaySpeed;
  }

  return sliderSettings;
};


function RecentJobGroup() {
  const sliderSettings = getSliderSettings(true, true, 3, true)

  const jobs = useContext(JobContext)
  return (
    <div className='container py-10'>
      <h2 className='text-center mb-8'>Our Recent Jobs</h2>
      <Slider {...sliderSettings}>
        {jobs.slice(0, 9).map(item =>
          <RecentJobCard
            key={item.id}
            title={item.title}
            body={item.description}
            category={item.category}
            thumbnail={item.image}
          />)}
      </Slider>
      <div className='d-flex justify-content-center'>
        <Link to="/recent-jobs" className='btn btn-primary mt-9'>See all Jobs</Link>
      </div>
    </div>
  );
}

export default RecentJobGroup;