import { Link } from "react-router-dom";

const CareerCard = () => {
    return (
        <section>
            <section className="card mx-auto" style={{ maxWidth: "379px" }}>
                <section className="card-body">
                    <header>
                        <h5>Job Title</h5>
                    </header>

                    <section className="fw-light">
                        <p>Experience:</p>
                        <p>Skills:</p>
                        <p>Deadline:</p>
                    </section>

                    <section className="d-flex justify-content-center">
                        <Link to="#" className="btn btn-primary me-2">
                            Apply Now
                        </Link>

                        <Link to="#" className="btn btn-outline-primary">
                            see More
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default CareerCard;
