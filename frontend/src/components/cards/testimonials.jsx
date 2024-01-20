import parse from "html-react-parser";
import { useContext } from "react";
import { CompanyInfoContext } from "../../App";

function TestimonialCard({ image, id, message, name, position }) {
    const companyInfo = useContext(CompanyInfoContext);

    return (
        <>
            <div className="container" key={id}>
                <div className="row">
                    <div className="col-lg-5 d-flex justify-content-around align-items-center">
                        <img
                            src={companyInfo.get_testimonial_frame}
                            className="img-fluid testimonial-frame"
                            alt="frame"
                            style={{ maxWidth: "85.76px", maxHeight: "276px" }}
                        />
                        <section
                            className="ratio ratio-1x1"
                            style={{ maxWidth: "300px" }}
                        >
                            <img
                                src={image}
                                className="rounded-circle"
                                alt={name}
                            />
                        </section>
                        <img
                            src={companyInfo.get_testimonial_frame}
                            className="img-fluid testimonial-frame"
                            alt="frame"
                            style={{ maxWidth: "85.76px", maxHeight: "276px" }}
                        />
                    </div>
                    <div className="col-lg-7">
                        <i class="fa-solid fa-quote-left text-primary fs-3"></i>
                        <p>{parse(`${message}`)}</p>
                        <i class="fa-solid fa-quote-right text-primary d-flex justify-content-end fs-3"></i>

                        <div>
                            <h5>{name}</h5>
                            <small className="text-primary fw-bold">
                                {position}
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;
