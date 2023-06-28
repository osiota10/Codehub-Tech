import React from 'react';
import Service from '../cards/serviceCard';
import { useContext } from 'react';
import { ServiceContext } from '../../App';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import { getSliderSettings } from './recentJobGroup';


function ServiceGroup({ type }) {
  const service = useContext(ServiceContext)

  const settings = getSliderSettings(false, true, 3, false)

  return (
    <div className='container py-10'>
      {type ?
        <>
          <h2 className='text-center mb-8'>Our Services</h2>
          <div className='row row-cols-1 row-cols-lg-3 g-6'>
            {service.slice(0, 6).map(item => <Link className='text-decoration-none' to={'/services/' + item.id}><Service key={item.id} title={item.title} body={item.body} /></Link>)}
          </div>
        </>

        // { Object.keys(service).length > 6 ?
        //     <div className='d-flex justify-content-center'>
        //     <Link to="/services" className='btn btn-primary mt-9'>See all Services</Link>
        // </div>
        // :
        // '' }

        :

        <div className='container py-10'>
          <h2 className='text-center mb-8'>What We Do</h2>
          <Slider {...settings}>
            {service.map(item => <Link className='text-decoration-none' to={'/services/' + item.id}><Service key={item.id} title={item.title} body={item.body} /></Link>)}
          </Slider>
          <div className='d-flex justify-content-center'>
            <Link to="/services" className='btn btn-primary'>See all Services</Link>
          </div>
        </div>

      }

    </div>
  );
}

export default ServiceGroup;
