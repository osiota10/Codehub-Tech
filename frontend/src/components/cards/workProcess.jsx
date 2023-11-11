import parse from "html-react-parser";

const WorkProcess = ({ id, title, description, step, font_awesome_class }) => {
    return (
        <section
            className="card custom-card"
            style={{ marginBottom: "1px" }}
            key={id}
        >
            <div className="row g-0">
                <section className="card-body d-flex">
                    <div className="col-md-2 d-flex flex-column align-items-center me-2">
                        <i
                            className={`${font_awesome_class} mb-1 fs-3 text-primary`}
                        ></i>
                        <div
                            className="bg-primary"
                            style={{ minHeight: "50%" }}
                        >
                            <div className="vr" style={{ width: "4px" }}></div>
                        </div>
                    </div>

                    <section className="col-md-10">
                        <header className="d-flex justify-content-between">
                            <h5 className="card-title">{title}</h5>
                            <div>
                                <span className="badge bg-primary align-middle">
                                    Step {step}
                                </span>
                            </div>
                        </header>

                        <p className="card-text">{parse(`${description}`)}</p>
                    </section>
                </section>
            </div>
        </section>
    );
};

export default WorkProcess;
