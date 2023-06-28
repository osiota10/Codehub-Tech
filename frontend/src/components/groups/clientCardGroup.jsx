import React, { useContext } from 'react';
import Client from '../cards/clientCard';
import { clientContext } from '../../App';
import Slider from "react-slick";
import { getSliderSettings } from './recentJobGroup';

function ClientGroup() {
  const clients = useContext(clientContext)
  const settings = getSliderSettings(false, false, 3, false)

  return (
    <div className='container py-10'>
      <h2 className='text-center mb-8'>Our Clients</h2>
      <Slider {...settings}>
        {clients.map(item => <Client key={item.id} name={item.title} />)}
      </Slider>
    </div>
  );
}

export default ClientGroup;