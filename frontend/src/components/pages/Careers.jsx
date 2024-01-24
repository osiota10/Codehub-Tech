import PageTitle from "./pageTitle";
import TeamGroup from "../groups/teamGroup";
import TextTemplate from "../cards/sampleText";
import CareerGroup from "../groups/careerGroup";
import { CompanyInfoContext } from "../../App";
import { useContext } from "react";

const Careers = () => {
    const companyInfo = useContext(CompanyInfoContext);
    const careerBenefits = [
        {
            id: 1,
            title: "Careers with Codehub Technologies",
            description: `${companyInfo.career_benefits}`,
            pic_url:
                "https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?w=826&t=st=1706094006~exp=1706094606~hmac=b814bce95d6fc997b90f0d20c5e3ee6050798fcd24bd9ac1dbe0784d9fd36bfa",
        },
    ];
    return (
        <>
            <PageTitle title="Careers" />
            {companyInfo.career_benefits && (
                <TextTemplate dataList={careerBenefits} />
            )}

            <CareerGroup />
            <TeamGroup />
            <section className="container pb-10">
                <section className="row">
                    <section className="col-lg-8 mx-auto text-center">
                        <h3 className="text-center">
                            Didn't Find A Suitable Position?
                        </h3>
                        <p>
                            Send your CV to codehubtechnologies1@gmail.com and
                            stay updated about our future openings.
                        </p>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Careers;
