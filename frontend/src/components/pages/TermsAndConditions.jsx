import PageTitle from "./pageTitle";
import { useContext } from "react";
import { CompanyInfoContext } from "../../App";
import parse from 'html-react-parser';

const OurTerms = () => {
    const companyInfo = useContext(CompanyInfoContext)

    return (
        <section>
            <PageTitle title="Our Terms and Conditions" />

            <section className="container py-8">
                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        {parse(`${companyInfo.term_and_conditions}`)}
                    </section>
                </section>
            </section>
        </section>
    );
}

export default OurTerms;