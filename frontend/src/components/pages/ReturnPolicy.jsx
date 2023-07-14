import PageTitle from "./pageTitle";
import { useContext } from "react";
import { CompanyInfoContext } from "../../App";
import parse from 'html-react-parser';

const OurReturnPolicy = () => {
    const companyInfo = useContext(CompanyInfoContext)

    return (
        <section>
            <PageTitle title="Our Return Policy" />

            <section className="container py-8">
                <section className="row">
                    <section className="col-lg-8 mx-auto">
                        {parse(`${companyInfo.return_policy}`)}
                    </section>
                </section>
            </section>
        </section>
    );
}

export default OurReturnPolicy;