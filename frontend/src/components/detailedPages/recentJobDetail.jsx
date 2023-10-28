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
                        {parse(`${detail.summary}`)}
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
                        <Technologies techList={detail.technologies} />
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
