import React, { Component } from 'react';
import PageTitle from './pageTitle';
import ContactForm from '../cards/contactForm';
import Socials from '../cards/socials';
import Faq from '../cards/faq';
import MailSubscription from "../cards/emailSub";
import { Link } from 'react-router-dom';
import GoogleMap from '../cards/googleMap';

const pic = {
  url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roberthalf.com%2Fsites%2Fdefault%2Ffiles%2F2020-01%2F01-music-at-work-rh.jpg&f=1&nofb=1&ipt=f1950c39be4f82691bf490135aff47961ee790f9f931301968cd065f553de62e&ipo=images'
}

class Contact extends Component {
  state = {}
  render() {
    return (
      <>
        <PageTitle title="Contact Us" />

        <section className='container py-10'>
          <GoogleMap />
          <section className="row g-5 mt-6">
            <section className="col-lg-6">
              <img src={pic.url} className="img-fluid" alt="..." />
            </section>

            <section className="col-lg-6">
              <h2>Get In Touch</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Esse aliquid ad, iusto ducimus debitis aliquam nostrum
                libero eos impedit eum. Repudiandae quia est quas itaque
                eveniet aliquid delectus illo sed?</p>

              <section className="footer-contact-info">
                <section className="mb-2">
                  <section className="text-decoration-none hstack justify-content-start align-items-center" to='#'>
                    <section className='me-1 bg-primary p-1  icon-size text-center'>
                      <i className="fa-sharp fa-solid fa-location-dot fs-4 text-white align-middle"></i>
                    </section>

                    <p className="fw-bolder text-primary">Back Shops, Stephen Keshi Stadium, Asaba</p>
                  </section>
                </section>

                <section className="mb-2">
                  <Link className="text-decoration-none hstack justify-content-start align-items-center" to='#' onClick={() => window.location = 'tel:{companyInfo.telephone}'}>
                    <section className='me-1 bg-primary p-1 text-center'>
                      <i className="fa-solid fa-square-phone fs-4 text-white align-middle"></i>
                    </section>
                    <p className="fw-bolder">+2348106906058</p>
                  </Link>
                </section>

                <section className="">
                  <Link className="text-decoration-none hstack justify-content-start align-items-center" to='#' onClick={() => window.location = 'mailto:{companyInfo.email}'}>
                    <section className='me-1 bg-primary p-1 text-center'>
                      <i className="fa-solid fa-square-envelope fs-4 text-white align-middle"></i>
                    </section>
                    <p className="fw-bolder">info@codehubtech.com</p>
                  </Link>
                </section>
              </section>
            </section>
          </section>
        </section>

        <Socials small={false} />
        <ContactForm />
        <MailSubscription />
        <Faq />
      </>
    );
  }
}

export default Contact;