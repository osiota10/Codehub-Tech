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

    const [resumeInput, setResumeInput] = useState(null);
    const [coverLetterInput, setCoverLetterInput] = useState(null);

    const onFileInputChange = (e, setFileState) => {
        const file = e.target.files[0];

        // Check file type
        if (file && !file.type.includes("pdf")) {
            alert("PDF files only accepted");
            return;
        }

        // Check file size
        const maxSize = 1 * 1024 * 1024; //1mb
        if (file && file.size > maxSize) {
            alert("File exceeds 1mb");
            return;
        }

        setFileState(file);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // declare the data fetching function
        const PostFormData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            };

            // const body = JSON.stringify({
            //     full_name,
            //     email,
            //     phone_number,
            //     qualification,
            //     years_of_experience,
            // });
            const body = new FormData();
            body.append("full_name", full_name);
            body.append("email", email);
            body.append("phone_number", phone_number);
            body.append("qualification", qualification);
            body.append("years_of_experience", years_of_experience);
            body.append("role", role);
            body.append("resume", resumeInput);
            body.append("cover_letter", coverLetterInput);

            try {
                const res = await axios.post(
                    `${process.env.REACT_APP_API_URL}/job-opening-application`,
                    body,
                    config
                );
                setLoading(false);
                if (res.status === 201) {
                    onClose();
                    setFormData({
                        full_name: "",
                        email: "",
                        phone_number: "",
                        qualification: "",
                        years_of_experience: "",
                    });
                    setCoverLetterInput(null);
                    setResumeInput(null);
                }
            } catch (err) {
                setLoading(false);
                setFormError(err.response.data);
            }
        };
        PostFormData();
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
                                    placeholder="Phone Number"
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
                                    placeholder="Email"
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
                                    placeholder="Qualification"
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
                            <label for="cover_letter" class="form-label">
                                Cover Letter
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="cover_letter"
                                accept=".pdf"
                                onChange={(e) =>
                                    onFileInputChange(e, setCoverLetterInput)
                                }
                                required
                            />
                        </div>

                        <div>
                            <label for="resume" class="form-label">
                                Resume
                            </label>
                            <input
                                className="form-control"
                                type="file"
                                id="resume"
                                accept=".pdf"
                                onChange={(e) =>
                                    onFileInputChange(e, setResumeInput)
                                }
                                required
                            />
                        </div>

                        <section className="d-flex justify-content-center mt-5">
                            <button
                                type="submit"
                                className={
                                    loading
                                        ? "btn btn-primary disabled"
                                        : "btn btn-primary"
                                }
                            >
                                {loading && <LoaderIcon />}
                                Submit
                            </button>

                            <Button
                                variant="btn btn-danger ms-5"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </section>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CareerApplicationForm;
