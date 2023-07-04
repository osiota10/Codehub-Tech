import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const SuccessModal = ({ message, show, onClose, errorMessage }) => {
    return (
        <Modal
            show={show}
            onHide={onClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Body className='p-8'>
                <section className='text-center mb-2'>
                    {
                        errorMessage.length === 0
                            ?
                            <i className="fa-solid fa-circle-check fs-1 text-success"></i>
                            :
                            <i className="fa-solid fa-triangle-exclamation fs-1 text-danger"></i>
                    }

                    <Modal.Title className={errorMessage.length === 0 ? 'text-success' : 'text-danger'}>
                        {errorMessage.length === 0
                            ?
                            "Success"
                            :
                            "Error"
                        }
                    </Modal.Title>
                </section>

                {errorMessage.length === 0
                    ?
                    <p className=''>{message}</p>
                    :
                    null
                }

                {
                    errorMessage.length > 0
                        ?
                        <section>
                            {Object.entries(errorMessage).map(([key, value]) => (
                                <Alert variant='danger' key={key} className='text-center'>
                                    {value}
                                </Alert>
                            ))}
                        </section>
                        :
                        null
                }

                <section className='d-flex justify-content-center mt-5'>
                    <Button variant="btn btn-danger" onClick={onClose} >
                        Close
                    </Button>
                </section>

            </Modal.Body>
        </Modal>
    );
}

export default SuccessModal;