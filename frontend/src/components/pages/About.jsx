import { useState, useEffect } from 'react';
import ClientGroup from "../groups/clientCardGroup";
import IndustryGroup from '../groups/industryGroup';
import PageTitle from './pageTitle';
import ContactForm from '../cards/contactForm';
import MailSubscription from '../cards/emailSub';
import TextTemplate from '../cards/sampleText';
import Technologies from '../groups/techGroup';
import ServiceGroup from '../groups/serviceCardGroup';
import axios from 'axios';


const About = () => {
  const [tech, setTech] = useState([])

  useEffect(() => {
    //Our Team
    axios.get(`${process.env.REACT_APP_API_URL}/technologies`)
      .then(res => {
        setTech(res.data)
      })
  }, [])

  return (
    <>
      <PageTitle title="About" />
      <TextTemplate />
      <ServiceGroup type={false} />

      {
        Object.keys(tech).length === 0
          ?
          null
          :
          <Technologies techList={tech} />
      }

      <IndustryGroup />
      <ClientGroup />
      <MailSubscription />
      <ContactForm />
    </>
  );
}

export default About;