import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTitle from "../pages/pageTitle";
import axios from "axios";
import ContactForm from "../cards/contactForm";
import MailSubscription from "../cards/emailSub";
import RecentJobGroup from "../groups/recentJobGroup";
import Technologies from "../groups/techGroup";
import WorkProcessGroup from "../groups/workProcessGroup";
import Faq from "../cards/faq";
import Stat from "../cards/stat";
import PricingGroup from "../groups/pricingGroup";
import parse from "html-react-parser";
import { PageLoader } from "../cards/utilities/loader";

function ServicesDetail() {
    const { slug } = useParams();
    const [detail, setDetails] = useState([]);
    const dataCheck = !detail || detail.length === 0;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_API_URL}/our-services/` + slug
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

            <section className="container py-10">
                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        {parse(`${detail.description}`)}
                    </section>
                </section>
            </section>

            {/* Stats display Logic */}
            {dataCheck ? null : (
                <>
                    {Object.keys(detail.stats).length === 0 ? null : (
                        <section className=" bg-light py-10">
                            <section className="row">
                                <section className="col-lg-10 mx-auto">
                                    <Stat statList={detail.stats} />
                                </section>
                            </section>
                        </section>
                    )}
                </>
            )}

            {/* Pricing display Logic */}
            {dataCheck ? null : (
                <>
                    {Object.keys(detail.pricings).length === 0 ? null : (
                        <PricingGroup
                            priceList={detail.pricings}
                            serviceTitle={detail.title}
                        />
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

            <WorkProcessGroup />

            {/* Related Jobs display Logic */}
            {dataCheck ? null : (
                <>
                    {Object.keys(detail.category).length === 0 ? null : (
                        <RecentJobGroup filterCategory={detail.category} />
                    )}
                </>
            )}

            {/* FAQs display Logic */}
            {dataCheck ? null : (
                <>
                    {Object.keys(detail.faqs).length === 0 ? null : (
                        <Faq faqList={detail.faqs} />
                    )}
                </>
            )}

            <MailSubscription />
            <ContactForm />
            {loading ? <PageLoader /> : null}
        </>
    );
}

export default ServicesDetail;
