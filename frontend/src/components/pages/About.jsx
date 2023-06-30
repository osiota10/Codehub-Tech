import React, { Component } from 'react';
import ClientGroup from "../groups/clientCardGroup";
import IndustryGroup from '../groups/industryGroup';
import PageTitle from './pageTitle';
import ContactForm from '../cards/contactForm';
import MailSubscription from '../cards/emailSub';
import TextTemplate from '../cards/sampleText';
import Technologies from '../groups/techGroup';
import ServiceGroup from '../groups/serviceCardGroup';


class About extends Component {
  state = {}
  render() {
    return (
      <>
        <PageTitle title="About" />
        <TextTemplate />
        <ServiceGroup type={false} />
        {/* <Technologies /> */}
        <IndustryGroup />
        <ClientGroup />
        <MailSubscription />
        <ContactForm />
      </>
    );
  }
}

export default About;