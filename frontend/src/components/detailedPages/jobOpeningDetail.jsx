import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import PageTitle from "../pages/pageTitle";
import axios from "axios";
import ContactForm from "../cards/contactForm";
import MailSubscription from "../cards/emailSub";
import parse from "html-react-parser";
import { CompanyInfoContext } from "../../App";
import { PageLoader } from "../cards/utilities/loader";
import LoaderIcon from "../cards/utilities/loader";
import CareerApplicationForm from "../cards/careerAppForm";

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
                            <li>Date Posted: {detail.date_created}</li>
                            <li>Deadline: {detail.deadline}</li>
                            <li>
                                Number of Openings: {detail.number_of_openings}
                            </li>
                            <li>
                                Years of Experience:
                                {detail.years_of_experience}
                            </li>
                            <li>Locaion: {detail.location}</li>
                            <li>Qualification: {detail.qualification}</li>
                            <li>Skills: {detail.skills}</li>
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
            />
        </>
    );
};

export default JobOpeningDetail;
