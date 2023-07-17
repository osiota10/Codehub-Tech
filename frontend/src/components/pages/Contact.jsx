import { useContext } from 'react';
import PageTitle from './pageTitle';
import ContactForm from '../cards/contactForm';
import Socials from '../cards/socials';
import Faq from '../cards/faq';
import MailSubscription from "../cards/emailSub";
import GoogleMap from '../cards/googleMap';
import { CompanyInfoContext } from '../../App';

const pic = {
  url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roberthalf.com%2Fsites%2Fdefault%2Ffiles%2F2020-01%2F01-music-at-work-rh.jpg&f=1&nofb=1&ipt=f1950c39be4f82691bf490135aff47961ee790f9f931301968cd065f553de62e&ipo=images'
}

const Contact = () => {
  const companyInfo = useContext(CompanyInfoContext)
  const dataCheckSocials = !companyInfo.company_social || companyInfo.company_social.length === 0
  const dataCheckFaqs = !companyInfo.company_faqs || companyInfo.company_faqs.length === 0

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
            <p>Let's Connect and Ignite Possibilities! We're just a message away from
              transforming your vision into reality. Whether you have a question,
              a brilliant idea, or want to discuss a potential collaboration,
              our team is ready to listen and help you thrive.</p>

            <section className="footer-contact-info">
              <section className="mb-2">
                <section className="text-decoration-none hstack justify-content-start align-items-center" to='#'>
                  <section className='me-1 bg-primary p-1  icon-size text-center'>
                    <i className="fa-sharp fa-solid fa-location-dot fs-4 text-white align-middle"></i>
                  </section>

                  <p className="fw-bolder text-primary">{companyInfo.company_address}</p>
                </section>
              </section>

              <section className="mb-2">
                <a className="text-decoration-none hstack justify-content-start align-items-center" href={`tel:${companyInfo.telephone}`}>
                  <section className='me-1 bg-primary p-1 text-center'>
                    <i className="fa-solid fa-square-phone fs-4 text-white align-middle"></i>
                  </section>
                  <p className="fw-bolder">{companyInfo.telephone}</p>
                </a>
              </section>

              <section className="">
                <a className="text-decoration-none hstack justify-content-start align-items-center" href={`mailto:${companyInfo.email}`}>
                  <section className='me-1 bg-primary p-1 text-center'>
                    <i className="fa-solid fa-square-envelope fs-4 text-white align-middle"></i>
                  </section>
                  <p className="fw-bolder">{companyInfo.email}</p>
                </a>
              </section>
            </section>
          </section>
        </section>
      </section>

      {
        dataCheckSocials
          ?
          null
          :
          <Socials small={false} socials={companyInfo.company_social} />
      }

      <ContactForm />
      <MailSubscription />

      {
        dataCheckFaqs
          ?
          null
          :
          <Faq faqList={companyInfo.company_faqs} />
      }

    </>
  );
}

export default Contact;