import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTitle from "../pages/pageTitle";
import axios from "axios";
import ContactForm from "../cards/contactForm";
import MailSubscription from "../cards/emailSub";
import RecentJobGroup from "../groups/recentJobGroup";
import Technologies from "../groups/techGroup";
import TextTemplate from "../cards/sampleText";
import parse from "html-react-parser";

function RecentJobDetail() {
    const { slug } = useParams();
    const [detail, setDetails] = useState([]);
    console.log(detail);
    const dataCheck = !detail || detail.length === 0;

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/our-recent-jobs/` + slug)
            .then((res) => {
                setDetails(res.data);
            });
    }, [slug]);

    return (
        <>
            <PageTitle title={detail.title} />

            <section className="container py-10">
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

            {dataCheck ? null : (
                <>
                    {Object.keys(detail.recent_job_statement).length ===
                    0 ? null : (
                        <TextTemplate dataList={detail.recent_job_statement} />
                    )}
                </>
            )}

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

            <MailSubscription />
            <ContactForm />
        </>
    );
}

export default RecentJobDetail;
