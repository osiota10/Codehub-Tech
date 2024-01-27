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

                    <section className="fw-light">
                        <p>Experience: {experience}</p>
                        <p>Skills: {skills}</p>
                        <p>
                            Deadline: {deadline && formatDateWithTime(deadline)}
                        </p>
                        <p>Qualification: {qualification}</p>
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
