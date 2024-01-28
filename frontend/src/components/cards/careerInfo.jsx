import { Link } from "react-router-dom";
import CareerApplicationForm from "./careerAppForm";
import { useState } from "react";
import { formatDateWithTime } from "./recentJobCard";

const CareerCard = ({
    title,
    deadline,
    experience,
    skills,
    slug,
    id,
    qualification,
}) => {
    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);
    return (
        <section key={id}>
            <section className="card mx-auto" style={{ maxWidth: "379px" }}>
                <section className="card-body">
                    <header>
                        <h5>{title}</h5>
                    </header>

                    <section>
                        <p>
                            <span className="fw-light">Experience:</span>{" "}
                            {experience}
                        </p>

                        <section className="d-flex">
                            <p className="fw-light me-1">Skills:</p>
                            <p>{skills}</p>
                        </section>

                        <section className="d-flex">
                            <p className="fw-light me-1">Deadline:</p>
                            <p>{deadline && formatDateWithTime(deadline)}</p>
                        </section>

                        <section className="d-flex">
                            <p className="fw-light me-1">Qualification:</p>
                            <p>{qualification}</p>
                        </section>
                    </section>

                    <section className="d-flex justify-content-center">
                        <Link
                            to="#"
                            className="btn btn-primary me-2"
                            onClick={handleShow}
                        >
                            Apply Now
                        </Link>

                        <Link to={slug} className="btn btn-outline-primary">
                            see More
                        </Link>
                    </section>
                </section>
            </section>
            <CareerApplicationForm
                show={show}
                onClose={handleClose}
                role={title}
                role_id={id}
            />
        </section>
    );
};

export default CareerCard;
