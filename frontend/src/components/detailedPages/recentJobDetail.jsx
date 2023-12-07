import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import PageTitle from "../pages/pageTitle";
import axios from "axios";
import ContactForm from "../cards/contactForm";
import MailSubscription from "../cards/emailSub";
import RecentJobGroup from "../groups/recentJobGroup";
import Technologies from "../groups/techGroup";
import TextTemplate from "../cards/sampleText";
import parse from "html-react-parser";
import { CompanyInfoContext } from "../../App";
import { PageLoader } from "../cards/utilities/loader";

function RecentJobDetail() {
    const { slug } = useParams();
    const [detail, setDetails] = useState([]);
    console.log(detail);
    const dataCheck = !detail || detail.length === 0;
    const companyInfo = useContext(CompanyInfoContext);
    const [loading, setLoading] = useState(true);

    const jobStatements = [
        {
            id: 1,
            title: "Problem Statement",
            description: detail.problem_statement,
            pic_url:
                "https://img.freepik.com/premium-photo/businessman-man-hand-hold-interface-question-marks-sign-web-ask-quiestion-online-faq-concept-what-where-when-how-why-search-information-internet_150455-4919.jpg?w=900",
        },
        {
            id: 2,
            title: "Solutions Offered",
            description: detail.solution_offered,
            pic_url:
                "https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041859.jpg?w=900&t=st=1701947574~exp=1701948174~hmac=47bb6f28a2fd286594ead6e64a2fbed9012a3787cbd451653cddb8653cb686a2",
        },
    ];
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/our-recent-jobs/` + slug
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
            <PageTitle title={detail.title} />

            <section className="container pt-10">
                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        <h2 className="text-center">Project Overview</h2>
                        {parse(`${detail.summary}`)}
                    </section>
                </section>

                <section className="row mt-2">
                    <section className="col-lg-8 mx-auto">
                        <section className="row row-cols-1 row-cols-md-3 g-2">
                            <section className="col-md-4 d-flex">
                                <i
                                    className="fa-solid fa-globe text-primary me-2"
                                    style={{ fontSize: "3rem" }}
                                ></i>
                                <section>
                                    <h6>Location</h6>
                                    <p className="fw-light">Nigeria</p>
                                </section>
                            </section>

                            <section className="col-md-4 d-flex">
                                <i
                                    className="fa-solid fa-industry text-primary me-2"
                                    style={{ fontSize: "3rem" }}
                                ></i>
                                <section>
                                    <h6>Industry</h6>
                                    <p className="fw-light">Nigeria</p>
                                </section>
                            </section>

                            <section className="col-md-4 d-flex">
                                <i
                                    className="fa-solid fa-arrow-up-short-wide text-primary me-2"
                                    style={{ fontSize: "3rem" }}
                                ></i>
                                <section>
                                    <h6>Category</h6>
                                    <p className="fw-light">
                                        {dataCheck ? null : (
                                            <>
                                                {detail.category.map((item) => (
                                                    <span key={item.id}>
                                                        {item.name}
                                                    </span>
                                                ))}
                                            </>
                                        )}
                                    </p>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>

            {dataCheck ? null : <TextTemplate dataList={jobStatements} />}

            {/* Technologies display Logic */}
            {dataCheck ? null : (
                <>
                    {Object.keys(detail.technologies).length === 0 ? null : (
                        <Technologies
                            techList={detail.technologies}
                            is_recent_job={true}
                        />
                    )}
                </>
            )}

            {/* Related Jobs display Logic */}
            {dataCheck ? null : (
                <>
                    {Object.keys(detail.category).length === 0 ? null : (
                        <RecentJobGroup
                            filterCategory={detail.category}
                            currentItem={detail.id}
                        />
                    )}
                </>
            )}

            <section className="container pb-10">
                <section className="row">
                    <section className="col-lg-8 mx-auto text-center">
                        <h3 className="text-center">
                            Planning for a Similar Project or Task?
                        </h3>
                        <p>
                            Our consultants are here to hear all about it and
                            provide you with an instant viable solution
                        </p>
                        <a
                            href={companyInfo.company_social.whatsapp_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <i className="fa-brands fa-whatsapp fs-6 text-white me-1"></i>
                            Contact Us Now
                        </a>
                    </section>
                </section>
            </section>

            <MailSubscription />
            <ContactForm />
            {loading ? <PageLoader /> : null}
        </>
    );
}

export default RecentJobDetail;
