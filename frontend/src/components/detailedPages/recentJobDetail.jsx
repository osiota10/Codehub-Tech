import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PageTitle from "../pages/pageTitle";
import axios from "axios";
import ContactForm from "../cards/contactForm";
import MailSubscription from "../cards/emailSub";
import RecentJobGroup from "../groups/recentJobGroup";
import Technologies from "../groups/techGroup";
import TextTemplate from "../cards/sampleText";

function RecentJobDetail() {
    const { id } = useParams();
    const [detail, setDetails] = useState([]);

    useEffect(() => {
        console.log('correct')
        axios.get(`https://fakestoreapi.com/products/` + id)
            .then(res => {
                setDetails(res.data)
            })
    }, [id]);

    return (
        <>
            <PageTitle title={detail.title} />
            <TextTemplate />


            {/* <Technologies /> */}
            <RecentJobGroup />
            <MailSubscription />
            <ContactForm />
        </>
    );
}

export default RecentJobDetail;