import PageTitle from "./pageTitle";
import { useContext } from "react";
import { CompanyInfoContext } from "../../App";
import parse from 'html-react-parser';

const Privacy = () => {
    const companyInfo = useContext(CompanyInfoContext)

    return (
        <section>
            <PageTitle title="Our Privacy Statement" />

            <section className="container py-8">
                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        {parse(`${companyInfo.privacy_policy}`)}
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Privacy;