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
    <>
      {
        Object.keys(service).length === 0
          ?
          null
          :
          <div className='container py-10'>
            {type ?
              <>
                <h2 className='text-center mb-6'>Our Services</h2>
                <div className='row row-cols-1 row-cols-lg-3 g-6 justify-content-center'>
                  {service.slice(0, 6).map(item =>
                    <Link className='text-decoration-none'
                      to={'/services/' + item.slug}
                    >
                      <Service
                        key={item.id}
                        title={item.title}
                        body={item.safe_description_html}
                        image={item.get_image_url}
                      />
                    </Link>
                  )}
                </div>
                {Object.keys(service).length > 6 ?
                  <div className='d-flex justify-content-center'>
                    <Link to="/services" className='btn btn-primary mt-6'>See all Services</Link>
                  </div>
                  :
                  null}
              </>

              :

              <div className='container py-10'>
                <h2 className='text-center mb-6'>What We Do</h2>
                <Slider {...settings}>
                  {service.map(item =>
                    <Link
                      className='text-decoration-none'
                      to={'/services/' + item.slug}
                    >
                      <Service
                        key={item.id}
                        title={item.title}
                        body={item.safe_description_html}
                        image={item.get_image_url}
                      />
                    </Link>
                  )}
                </Slider>
                <div className='d-flex justify-content-center'>
                  <Link to="/services" className='btn btn-primary mt-9'>See all Services</Link>
                </div>
              </div>
            }
          </div>
      }
    </>
  );
}

export default ServiceGroup;
