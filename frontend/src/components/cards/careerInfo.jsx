const CareerCard = () => {
    return (
        <section>
            <section className="card mx-auto" style={{ maxWidth: "379px" }}>
                <section className="card-body">
                    <h5>Job Title</h5>
                    <p>Experience</p>
                    <p>Skills</p>
                    <p>Deadline</p>
                    <section className="d-flex justify-content-center">
                        <Link to="#" className="btn btn-primary">
                            Apply Now
                        </Link>

                        <Link to="#" className="btn btn-primary">
                            Read More
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default CareerCard;
