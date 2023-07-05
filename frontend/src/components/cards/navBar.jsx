import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavBar() {
    // Sticky Navbar
    const [fix, seFix] = useState(false)

    function handleFixNavBar() {
        if (window.scrollY >= 10) {
            seFix(true)
        } else {
            seFix(false)
        }
    }

    window.addEventListener('scroll', handleFixNavBar)

    // Offcanvas
    const [showOffcanvas, setOffcanvasShow] = useState(false);
    const handleOffcanvasClose = () => setOffcanvasShow(false);
    const handleOffcanvasShow = () => setOffcanvasShow(true);

    return (
        <>
            <nav className={fix ? "navbar fixed-top shadow-sm navbar-expand-lg bg-white" : "navbar navbar-expand-lg bg-white"}>
                <div className="container-fluid">
                    <Link to="/" className='navbar-brand d-flex align-items-center'>
                        <img src="logo.svg" alt="Logo" width="50" height="50" className="d-inline-block align-text-top me-1" />
                        <h6>Codehub <br />Technologies</h6>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasNavbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleOffcanvasShow}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Offcanvas id="offcanvasNavbar" show={showOffcanvas} onHide={handleOffcanvasClose} backdrop="static" responsive="lg" tabIndex="-1">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <NavLink to="/about" className='nav-link' aria-current="page">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/services" className='nav-link'>Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/recent-jobs" className='nav-link'>Recent Jobs</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>

                    <a className='btn btn-primary d-none d-sm-none d-md-none d-lg-block' href="#contact-form">Request a Quote</a>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default NavBar;