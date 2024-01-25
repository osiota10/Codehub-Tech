import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
import LoaderIcon from "./utilities/loader";

const CareerApplicationForm = ({ show, onClose, role }) => {
    // Form
    const [loading, setLoading] = useState(false);
    const [formError, setFormError] = useState([]);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone_number: "",
        qualification: "",
        years_of_experience: "",
    });

    const {
        full_name,
        email,
        phone_number,
        qualification,
        years_of_experience,
    } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // declare the data fetching function
        // const PostFormData = async () => {
        //     const config = {
        //         headers: {
        //             "Content-Type": "application/json",
        //             Accept: "application/json",
        //         },
        //     };

        //     const body = JSON.stringify({
        //         full_name,
        //         subject,
        //         email,
        //         phone_number,
        //         message,
        //     });

        //     try {
        //         const res = await axios.post(
        //             `${process.env.REACT_APP_API_URL}/contact-us`,
        //             body,
        //             config
        //         );
        //         setLoading(false);
        //         if (res.status === 201) {
        //             // handleShow();
        //             setFormData({
        //                 full_name: "",
        //                 subject: "",
        //                 email: "",
        //                 phone_number: "",
        //                 message: "",
        //             });
        //         }
        //     } catch (err) {
        //         setFormError(err.response.data);
        //     }
        // };
        // PostFormData();
    };

    return (
        <>
            <Modal
                show={show}
                onHide={onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body className="p-4">
                    <h3>Role: {role}</h3>
                    <form className="row g-3" onSubmit={(e) => onSubmit(e)}>
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="full_name"
                                    placeholder="Full Name"
                                    name="full_name"
                                    onChange={(e) => onChange(e)}
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
                                    className="form-control"
                                    id="phone_number"
                                    placeholder="Full Name"
                                    name="phone_number"
                                    onChange={(e) => onChange(e)}
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
                                    className="form-control"
                                    id="email"
                                    placeholder="Full Name"
                                    name="email"
                                    onChange={(e) => onChange(e)}
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
                                    className="form-control"
                                    id="qualification"
                                    placeholder="Full Name"
                                    name="qualification"
                                    onChange={(e) => onChange(e)}
                                    value={qualification}
                                    required
                                />
                                <label for="qualification">Qualification</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="years_of_experience"
                                    placeholder="Years of Experience"
                                    name="years_of_experience"
                                    onChange={(e) => onChange(e)}
                                    value={years_of_experience}
                                    required
                                />
                                <label for="years_of_experience">
                                    Years of Experience
                                </label>
                            </div>
                        </div>

                        <div>
                            <label for="formFile" class="form-label">
                                Cover Letter
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
                            />
                        </div>

                        <div>
                            <label for="formFile" class="form-label">
                                Resume
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
                            />
                        </div>
                    </form>

                    <section className="d-flex justify-content-center mt-5">
                        <button
                            type="submit"
                            className={
                                loading
                                    ? "btn btn-primary disabled"
                                    : "btn btn-primary"
                            }
                        >
                            {loading ? <LoaderIcon /> : null}
                            Submit
                        </button>

                        <Button variant="btn btn-danger ms-5" onClick={onClose}>
                            Cancel
                        </Button>
                    </section>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CareerApplicationForm;
