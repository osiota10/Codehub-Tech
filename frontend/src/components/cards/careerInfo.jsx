import { Link } from "react-router-dom";

const CareerCard = ({ title, deadline, experience, skills, slug, id }) => {
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
                        <p>Deadline: {deadline}</p>
                    </section>

                    <section className="d-flex justify-content-center">
                        <Link to="#" className="btn btn-primary me-2">
                            Apply Now
                        </Link>

                        <Link to={slug} className="btn btn-outline-primary">
                            see More
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default CareerCard;
