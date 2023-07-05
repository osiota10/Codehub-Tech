import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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


    // Request Quote Modal
    const [showRequestQuote, setRequestQuote] = useState(false);
    const handleRequestQuoteClose = () => setRequestQuote(false);
    const handleRequestQuoteShow = () => setRequestQuote(true);

    const [formAddData, setFormAddData] = useState({
        event: '',
        pb: '',
    });
    const { event, pb } = formAddData;
    const onChange = e => setFormAddData({ ...formAddData, [e.target.name]: e.target.value });

    const onRequestQuoteSubmit = e => {
        e.preventDefault();

    };

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

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleOffcanvasShow}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Offcanvas show={showOffcanvas} onHide={handleOffcanvasClose} backdrop="static" responsive="lg">
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

            <Modal
                show={showRequestQuote}
                onHide={handleRequestQuoteClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Request a Quote</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={e => onRequestQuoteSubmit(e)}>
                        <section className="row g-3">
                            <div class="col-12">
                                <label for="event" class="form-label">Event</label>
                                <input
                                    type="text"
                                    class="form-control inputfield bg-light"
                                    id="event"
                                    name="event"
                                    value={event}
                                    onChange={e => onChange(e)}
                                    required />
                            </div>
                            <div class="col-12">
                                <label for="pb" class="form-label">PB</label>
                                <input
                                    type="text"
                                    class="form-control inputfield bg-light"
                                    id="pb"
                                    name="pb"
                                    value={pb}
                                    onChange={e => onChange(e)}
                                    required />
                            </div>
                            <div class="col-12 mt-3">
                                <button type="submit" class="btn btn-primary form-control">Submit</button>
                            </div>
                        </section>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="btn btn-outline-primary" onClick={handleRequestQuoteClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NavBar;