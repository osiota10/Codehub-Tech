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
  const [coreValue, setCorevalue] = useState([])

  useEffect(() => {
    //Our Technologies
    axios.get(`${process.env.REACT_APP_API_URL}/technologies`)
      .then(res => {
        setTech(res.data)
      })

    //Our Core Values
    axios.get(`${process.env.REACT_APP_API_URL}/core-values`)
      .then(res => {
        setCorevalue(res.data)
      })
  }, [])

  return (
    <>
      <PageTitle title="About" />

      {/* Core Value list */}
      {
        Object.keys(coreValue).length === 0
          ?
          null
          :
          <TextTemplate dataList={coreValue} />
      }


      <ServiceGroup type={false} />

      {/* Technologies list */}
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