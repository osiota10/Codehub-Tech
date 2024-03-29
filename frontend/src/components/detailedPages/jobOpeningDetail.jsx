import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTitle from "../pages/pageTitle";
import axios from "axios";
import ContactForm from "../cards/contactForm";
import MailSubscription from "../cards/emailSub";
import parse from "html-react-parser";
import { PageLoader } from "../cards/utilities/loader";
import LoaderIcon from "../cards/utilities/loader";
import CareerApplicationForm from "../cards/careerAppForm";
import { formatDateWithTime } from "../cards/recentJobCard";

const JobOpeningDetail = () => {
    const { slug } = useParams();
    const [detail, setDetails] = useState([]);

    // const dataCheck = !detail || detail.length === 0;
    // const companyInfo = useContext(CompanyInfoContext);
    const [loading, setLoading] = useState(true);

    //Modal
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
    };
    const handleShow = () => setShow(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/our-jobs/` + slug
                );
                setDetails(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                // Set loading to false once the API call is complete (whether it succeeded or failed)
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    return (
        <>
            <PageTitle title={detail.job_title} />
            <section className="container py-8">
                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        <h6>Job Summary</h6>
                        <ul>
                            <li>
                                <span className="fw-light">Date Posted:</span>{" "}
                                {detail.date_created &&
                                    formatDateWithTime(detail.date_created)}
                            </li>
                            <li>
                                <span className="fw-light">Deadline:</span>{" "}
                                {detail.deadline &&
                                    formatDateWithTime(detail.deadline)}
                            </li>
                            <li>
                                <span className="fw-light">
                                    Number of Openings:{" "}
                                </span>
                                {detail.number_of_openings}
                            </li>
                            <li>
                                <span className="fw-light">
                                    Years of Experience:{" "}
                                </span>
                                {detail.years_of_experience}
                            </li>
                            <li>
                                <span className="fw-light">Locaion: </span>
                                {detail.location}
                            </li>
                            <li>
                                <span className="fw-light">
                                    Qualification:{" "}
                                </span>
                                {detail.qualification}
                            </li>
                            <li>
                                <span className="fw-light">Skills: </span>
                                {detail.skills}
                            </li>
                        </ul>
                    </section>
                </section>

                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        <h2>Roles and Responsibilites</h2>
                        {parse(`${detail.roles}`)}
                    </section>
                </section>

                <section className="d-flex justify-content-center">
                    <button
                        type="button"
                        className={
                            loading
                                ? "btn btn-primary disabled"
                                : "btn btn-primary"
                        }
                        onClick={handleShow}
                    >
                        {loading ? <LoaderIcon /> : null}
                        Apply Now
                    </button>
                </section>
            </section>

            <MailSubscription />
            <ContactForm />
            {loading ? <PageLoader /> : null}
            <CareerApplicationForm
                show={show}
                onClose={handleClose}
                role={detail.job_title}
                role_id={detail.id}
            />
        </>
    );
};

export default JobOpeningDetail;
