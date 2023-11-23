import { useState, useEffect, useContext } from "react";
import ClientGroup from "../groups/clientCardGroup";
import IndustryGroup from "../groups/industryGroup";
import PageTitle from "./pageTitle";
import ContactForm from "../cards/contactForm";
import MailSubscription from "../cards/emailSub";
import TextTemplate from "../cards/sampleText";
import Technologies from "../groups/techGroup";
import ServiceGroup from "../groups/serviceCardGroup";
import { CoreValuesContext, TechContext } from "../../App";

const About = () => {
    const tech = useContext(TechContext);
    const coreValue = useContext(CoreValuesContext);

    return (
        <>
            <PageTitle title="About" />

            {/* Core Value list */}
            {Object.keys(coreValue).length === 0 ? null : (
                <TextTemplate dataList={coreValue} />
            )}

            <ServiceGroup type={false} />

            {/* Technologies list */}
            {Object.keys(tech).length === 0 ? null : (
                <Technologies techList={tech} />
            )}

            <IndustryGroup />
            <ClientGroup />
            <MailSubscription />
            <ContactForm />
        </>
    );
};

export default About;
