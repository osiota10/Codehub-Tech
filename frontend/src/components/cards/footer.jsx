import React from 'react';
import { useContext } from 'react';
import Socials from './socials';
import { ServiceContext } from '../../App';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';
import { CompanyInfoContext } from '../../App';


const Footer = () => {
    const services = useContext(ServiceContext)
    const companyInfo = useContext(CompanyInfoContext)
    const dataCheck = !companyInfo.company_social || companyInfo.company_social.length === 0

    const date = new Date()

    return (
        <div className='pt-8 text-white bg-primary'>
            <div className='container pb-2'>
                <div className='row g-3'>
                    <div className="col-lg-4">
                        <h5 className='text-white'>Codehub Technologies</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fringilla turpis adipiscing ut sapien. Commodo pretium
                            elementum in in eleifend in etiam. </p>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="row">
                            <div className="col-6">
                                <h5 className='text-white'>Quick Links</h5>
                                <div className="list-group">
                                    <Link className='text-decoration-none text-white mb-1' to="/privacy-policy"><i class="fa-solid fa-angles-right me-1"></i>Privacy Policy</Link>
                                    <Link className='text-decoration-none text-white mb-1' to="/return-policy"><i class="fa-solid fa-angles-right me-1"></i>Return Policy</Link>
                                    <Link className='text-decoration-none text-white' to="/terms-and-conditions"><i class="fa-solid fa-angles-right me-1"></i>Terms and Conditions</Link>
                                </div>
                            </div>
                            <div className="col-6">
                                <h5 className='text-white'>Services</h5>
                                <div className="list-group">
                                    {services.slice(0, 4).map(item => (
                                        <Link
                                            className='text-decoration-none text-white'
                                            to={'/services/' + item.slug}
                                            key={item.id}
                                        >
                                            <i class="fa-solid fa-angles-right me-1"></i>
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <h5 className='text-white'>Get in Touch</h5>
                        <div class="mt-1">
                            <a href={`mailto:${companyInfo.email}`} class="text-decoration-none text-white"><span> <i
                                class="fa-solid fa-envelope me-1"></i></span>
                                <p class="d-inline">{companyInfo.email}</p></a>
                        </div>
                        <div class="mt-1">
                            <a href={`tel:${companyInfo.telephone}`} class="text-decoration-none text-white"><p class="d-inline"><i
                                class="fa-solid fa-phone-volume me-1"></i>{companyInfo.telephone}</p></a>
                        </div>
                        <div class="mt-1">
                            <i class="fa-solid fa-location-dot me-1"></i>
                            <p class="d-inline">{companyInfo.company_address}</p>
                        </div>

                        {
                            dataCheck
                                ?
                                null
                                :
                                <div >
                                    <Socials small={true} socials={companyInfo.company_social} />
                                </div>
                        }
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #fff' }}>
                <div className='container-fluid text-center py-3'>
                    <small>&#169; {date.getFullYear()} Codehub Technologies. All rights Reserved</small>
                </div>
            </div>
        </div>
    );
}

export default Footer;