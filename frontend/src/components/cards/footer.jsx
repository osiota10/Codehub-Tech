import React from 'react';
import { useContext } from 'react';
import Socials from './socials';
import { ServiceContext } from '../../App';
import TextTruncate from 'react-text-truncate';
import { Link } from 'react-router-dom';


const Footer = () => {
    const services = useContext(ServiceContext)

    return (
        <div className='pt-8 text-white bg-primary'>
            <div className='container pb-2'>
                <div className='row'>
                    <div className="col-lg-4">
                        <h5 className='text-white'>Codehub Technologies</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fringilla turpis adipiscing ut sapien. Commodo pretium
                            elementum in in eleifend in etiam. </p>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <h5 className='text-white'>Links</h5>
                                <div className="list-group">
                                    <p>Privacy Policy</p>
                                    <p>Return Policy</p>
                                    <p>Terms and Conditions</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <h5 className='text-white'>Services</h5>
                                <div className="list-group">
                                    {services.slice(0, 4).map(item => (
                                        <Link
                                            className='text-decoration-none text-white'
                                            to={'/services/' + item.id}
                                        >
                                            <TextTruncate
                                                line={1}
                                                element="p"
                                                truncateText="…"
                                                text={item.title}
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <h5 className='text-white'>Get in Touch</h5>
                        <div class="mt-1">
                            <a href="mailto:osiotaobrozie@gmail.com" class="text-decoration-none text-white"><span> <i
                                class="fa-solid fa-envelope me-1"></i></span>
                                <p class="d-inline">osiotaobrozie@gmail.com</p></a>
                        </div>
                        <div class="mt-1">
                            <a href="tel:2348106906058" class="text-decoration-none text-white"><p class="d-inline"><i
                                class="fa-solid fa-phone-volume me-1"></i>2348106906058</p></a>
                        </div>
                        <div class="mt-1">
                            <i class="fa-solid fa-location-dot me-1"></i>
                            <p class="d-inline">Stephen Keshi Stadium, Asaba</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: '1px solid #fff' }}>
                <div className='container py-4'>
                    <div className="row text-center g-3">
                        <div className="col-md-4">
                            <Socials small={true} />
                        </div>

                        <div className="col-md-4">
                            <small className="text-center">&#169; Codehub Technologies 2022. <br /> All rights Reserved</small>
                        </div>

                        <div className="col-md-4">
                            <small class="text-center">Designed and Developed by <br /> <span className='fw-bold'>Codehub Technologies</span></small>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;