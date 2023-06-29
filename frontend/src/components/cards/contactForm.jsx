import { useState } from "react";
import axios from 'axios';


const ContactForm = () => {

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
                    // handleShow()
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
    return (
        <div className='container py-10'>
            <section className='row'>
                <section className='col-lg-10 mx-auto'>
                    <header className='text-center mb-8'>
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
                                {/* <input type="text" className="form-control" id="full_name" placeholder="name@example.com" /> */}
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
                                {/* <input type="text" className="form-control" id="phone_number" placeholder="name@example.com" /> */}
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
                                {/* <input type="email" className="form-control" id="email" placeholder="name@example.com" /> */}
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
                                {/* <input type="text" className="form-control" id="subject" placeholder="name@example.com" /> */}
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
                                {/* <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '9.375rem' }}></textarea> */}
                                <label for="floatingTextarea2">Brief Description</label>
                            </div>
                        </div>


                        <div className="col-12 d-grid">
                            <button type="submit" className="btn btn-primary ">Submit</button>
                        </div>
                    </form>
                </section>
            </section>
        </div>
    );
}

export default ContactForm;
