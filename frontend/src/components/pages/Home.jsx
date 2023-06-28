import React, { Component } from 'react'
import ServiceGroup from "../groups/serviceCardGroup";
import ClientGroup from '../groups/clientCardGroup';
import RecentJobGroup from '../groups/recentJobGroup';
import TestimonialGroup from '../groups/testimonialGroup';
import HeroSection from '../cards/hero';
import MailSubscription from '../cards/emailSub';
import ContactForm from '../cards/contactForm';
import WorkProcessGroup from '../groups/workProcessGroup';
import TeamGroup from '../groups/teamGroup';
import FabIcon from '../cards/utilities/floatingFab';


class Home extends Component {

  render() {
    return (
      <>
        <HeroSection />
        <ClientGroup />
        <ServiceGroup type={true} />
        <RecentJobGroup />
        <WorkProcessGroup />
        <TeamGroup />
        <TestimonialGroup />
        <MailSubscription />
        <ContactForm />
      </>
    );
  }
}

export default Home;
