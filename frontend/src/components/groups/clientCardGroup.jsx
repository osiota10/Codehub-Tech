import { useEffect, useState } from 'react';
import Client from '../cards/clientCard';
import Slider from "react-slick";
import { getSliderSettings } from './recentJobGroup';
import axios from 'axios';

const ClientGroup = () => {
  const settings = getSliderSettings(false, false, 3, false)

  const [client, setClient] = useState([])

  useEffect(() => {
    // Clients
    axios.get(`${process.env.REACT_APP_API_URL}/clients`)
      .then(res => {
        setClient(res.data)
      })
  }, [])

  return (
    <>
      {Object.keys(client).length === 0
        ?
        null
        :
        <div className='container py-10'>
          <h2 className='text-center mb-8'>Our Clients</h2>
          <Slider {...settings}>
            {client.map(item =>
              <Client
                id={item.id}
                name={item.name_of_client}
                logo={item.get_logo_url}
              />
            )}
          </Slider>
        </div>
      }
    </>
  );
}

export default ClientGroup;