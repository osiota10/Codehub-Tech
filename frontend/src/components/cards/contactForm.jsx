import { useState } from "react";
import axios from 'axios';
import LoaderIcon from "./utilities/loader";
import SuccessModal from "./utilities/successModalMsg";


const ContactForm = () => {
    // Form
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState([]);
    const [formData, setFormData] = useState({
        full_name: '',
        subject: '',
        email: '',
        phone_number: '',
        message: '',
    });

    const { full_name, subject, email, phone_number, message } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        setLoading(true)

        // declare the data fetching function
        const PostFormData = async () => {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            };

            const body = JSON.stringify({ full_name, subject, email, phone_number, message });

            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/contact-us`, body, config);
                setLoading(false)
                if (res.status === 201) {
                    handleShow()
                    setFormData({
                        full_name: '',
                        subject: '',
                        email: '',
                        phone_number: '',
                        message: '',
                    })
                }
            } catch (err) {
                setFormError(err.response.data);
            }
        }
        PostFormData()
    };

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container py-10' id="contact-form">
            <section className='row'>
                <section className='col-lg-10 mx-auto'>
                    <header className='text-center mb-4'>
                        <h2>Have a Project in Mind?</h2>
                        <h5>Tell us about it</h5>
                    </header>

                    <form className="row g-3" onSubmit={e => onSubmit(e)}>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="full_name"
                                    placeholder="Full Name"
                                    name="full_name"
                                    onChange={e => onChange(e)}
                                    value={full_name}
                                    required
                                />
                                <label for="full_name">Full Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="phone_number"
                                    placeholder="Full Name"
                                    name="phone_number"
                                    onChange={e => onChange(e)}
                                    value={phone_number}
                                    required
                                />
                                <label for="phone_number">Phone Number</label>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    placeholder="Full Name"
                                    name="email"
                                    onChange={e => onChange(e)}
                                    value={email}
                                    required
                                />
                                <label for="email">Email address</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    class="form-control"
                                    id="subject"
                                    placeholder="Full Name"
                                    name="subject"
                                    onChange={e => onChange(e)}
                                    value={subject}
                                    required
                                />
                                <label for="subject">Subject</label>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-floating" >
                                <textarea
                                    class="form-control"
                                    id="floatingTextarea2"
                                    rows="4"
                                    placeholder="Leave a comment here"
                                    name="message"
                                    onChange={e => onChange(e)}
                                    value={message}
                                    style={{ height: '9.375rem' }}
                                    required
                                ></textarea>
                                <label for="floatingTextarea2">Brief Description</label>
                            </div>
                        </div>


                        <div className="col-12 d-grid">
                            <button
                                type="submit"
                                className={loading ? "btn btn-primary disabled" : "btn btn-primary"}
                            >
                                {loading
                                    ?
                                    <LoaderIcon />
                                    :
                                    null
                                }
                                Submit
                            </button>
                        </div>
                    </form>
                </section>
            </section>

            {
                show
                    ?
                    <SuccessModal
                        title='Thank you'
                        message='you have successfully uploaded Payment Proof'
                        errorMessage={formError}
                        show={show}
                        onClose={handleClose}
                    />
                    :
                    null
            }
        </div>
    );
}

export default ContactForm;
