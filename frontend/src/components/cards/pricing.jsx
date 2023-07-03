import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


function Pricing({ id, title, price, description, pricingFeatures, serviceName }) {
    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleWhatsAppRedirect = () => {
        const message = `Hi there, i am interested in ${serviceName}, ${title} (N${price}) package precisely.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/2349072444299?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    }

    return (
        <section className="col" key={id}>
            <section className="card mx-auto" style={{ maxWidth: '379px' }}>
                <section className="card-body">
                    <header className="text-center">
                        <h6>{title}</h6>
                        <h4>N{price}</h4>
                    </header>

                    <p className="text-center">{description}</p>

                    <section>
                        <section class="table-responsive mt-1">
                            <table class="table ">
                                <thead class="table-primary">
                                    <tr>
                                        <th scope="col" colspan="3" class="text-center">Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pricingFeatures.map((item) =>
                                        <tr key={item.id}>
                                            <td>
                                                <i className={item.is_featured ? "fa-solid fa-check" : "fa-solid fa-xmark"}>
                                                </i>
                                            </td>
                                            <td>{item.name}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                        </section>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary mb-3" onClick={handleShow}>Order Now</button>
                        </div>
                    </section>
                </section>
            </section>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Make Payments</Modal.Title>
                </Modal.Header>

                <Modal.Body className=''>
                    <section className='mb-3 d-flex justify-content-center'>
                        <Button variant="btn btn-primary" onClick={() => handleWhatsAppRedirect()}>
                            Via WhatsApp
                        </Button>
                    </section>

                    <section className='d-flex justify-content-center'>
                        <Button variant="btn btn-primary" disabled>
                            Pay Online
                        </Button>
                    </section>

                </Modal.Body>

                <Modal.Footer className='d-flex justify-content-center'>
                    <Button variant="btn btn-danger" onClick={handleClose} >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

export default Pricing;