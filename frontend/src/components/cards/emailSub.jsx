import { useState } from "react";
import axios from 'axios';
import LoaderIcon from "./utilities/loader";
import SuccessModal from "./utilities/successModalMsg";


const MailSubscription = () => {
    // Form
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState([]);
    const [formData, setFormData] = useState({
        email: '',
    });
    console.log(formError)
    const { email } = formData;

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

            const body = JSON.stringify({ email });

            try {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/email-subscription`, body, config);
                setLoading(false)
                if (res.status === 201) {
                    handleShow()
                    setFormData({
                        email: '',
                    })
                }
            } catch (err) {
                console.log(err)
                setFormError(err.response.data.email);
                setLoading(false)
                handleShow()
            }
        }
        PostFormData()
    };

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setFormError([])
        setShow(false)
    };
    const handleShow = () => setShow(true);

    return (
        <div className='bg-light'>
            <div className='container py-10'>
                <div className='row align-items-center'>
                    <div className='col-lg-5'>
                        <h4 className='d-flex justify-content-lg-end justify-content-center'>Subscribe to<br />our Newsletter</h4>
                    </div>
                    <div className='col-lg-7'>
                        <form className="row g-3" onSubmit={e => onSubmit(e)}>
                            <div className="col-md-8">
                                <div className="form-floating">
                                    {/* <input
                                        type="email"
                                        class="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        style={{ background: '#fff' }}
                                    /> */}
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="emafloatingInputil"
                                        placeholder="Full Name"
                                        name="email"
                                        onChange={e => onChange(e)}
                                        style={{ background: '#fff' }}
                                        value={email}
                                        required
                                    />
                                    <label for="floatingInput">Email address</label>
                                </div>
                            </div>

                            <div className="col-md-4 d-grid">
                                <button
                                    type="submit"
                                    className={loading ? "btn btn-primary mb-3 disabled" : "btn btn-primary mb-3"}
                                >
                                    {loading
                                        ?
                                        <LoaderIcon />
                                        :
                                        null
                                    }
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {
                    show
                        ?
                        <SuccessModal
                            message='You have successfully subscribe to our email updates'
                            errorMessage={formError}
                            show={show}
                            onClose={handleClose}
                        />
                        :
                        null
                }
            </div>
        </div>
    );
}

export default MailSubscription;
