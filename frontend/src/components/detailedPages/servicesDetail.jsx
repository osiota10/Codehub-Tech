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
import Stat from '../cards/stat';
import PricingGroup from "../groups/pricingGroup";

function ServicesDetail() {
    const { id } = useParams();
    const [detail, setDetails] = useState([]);

    useEffect(() => {
        console.log('correct')
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
            .then(res => {
                setDetails(res.data)
            })
    }, [id]);

    return (
        <>
            <PageTitle title={detail.title} />
            <section className="container py-10">
                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        <p>{detail.body}</p>
                    </section>
                </section>
            </section>

            <section className=" bg-light py-10">
                <section className="row">
                    <section className="col-lg-10 mx-auto">
                        <Stat />
                    </section>
                </section>
            </section>

            <PricingGroup />
            <Technologies />
            <WorkProcessGroup />
            <RecentJobGroup />
            <Faq />
            <MailSubscription />
            <ContactForm />
        </>
    );
}

export default ServicesDetail;