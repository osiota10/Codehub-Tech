import React from 'react';
import { Link } from 'react-router-dom';


function Socials({ small }) {
    return (
        <div>
            {small ?
                <>
                    <span className='me-1 bg-white p-1'>
                        <Link to='#'><i className="fa-brands fa-square-facebook fs-5 text-primary align-middle"></i></Link>
                    </span>

                    <span className='me-1 bg-white p-1'>
                        <Link to='#'><i className="fa-brands fa-instagram fs-5 text-primary align-middle"></i></Link>
                    </span>

                    <span className='me-1 bg-white p-1'>
                        <Link to='#'><i className="fa-brands fa-square-twitter fs-5 text-primary align-middle"></i></Link>
                    </span>

                    <span className='me-1 bg-white p-1'>
                        <Link to='#'><i className="fa-brands fa-linkedin fs-5 text-primary align-middle"></i></Link>
                    </span>

                    <span className='me-1 bg-white p-1'>
                        <Link to='#'><i className="fa-brands fa-square-youtube fs-5 text-primary align-middle"></i></Link>
                    </span>

                    <span className='me-1 bg-white p-1'>
                        <Link to='#'><i className="fa-brands fa-square-github fs-5 text-primary align-middle"></i></Link>
                    </span>
                </>

                :

                <>
                    <section className='py-10 bg-light'>
                        <header className='text-center mb-8'>
                            <h2>Our Socials</h2>
                            <h5>Follow us</h5>
                        </header>

                        <section className='d-flex justify-content-center'>
                            <section className='me-1 bg-white p-1'>
                                <Link to='#'><i className="fa-brands fa-square-facebook fs-1 text-primary align-middle"></i></Link>
                            </section>

                            <section className='me-1 bg-white p-1'>
                                <Link to='#'><i className="fa-brands fa-instagram fs-1 text-primary align-middle"></i></Link>
                            </section>

                            <section className='me-1 bg-white p-1'>
                                <Link to='#'><i className="fa-brands fa-square-twitter fs-1 text-primary align-middle"></i></Link>
                            </section>

                            <section className='me-1 bg-white p-1'>
                                <Link to='#'><i className="fa-brands fa-linkedin fs-1 text-primary align-middle"></i></Link>
                            </section>

                            <section className='me-1 bg-white p-1'>
                                <Link to='#'><i className="fa-brands fa-square-youtube fs-1 text-primary align-middle"></i></Link>
                            </section>

                            <span className='me-1 bg-white p-1'>
                                <Link to='#'><i className="fa-brands fa-square-github fs-1 text-primary align-middle"></i></Link>
                            </span>
                        </section>
                    </section>
                </>

            }
        </div>
    );
}

export default Socials;