import PageTitle from "./pageTitle";
import TeamGroup from "../groups/teamGroup";
import TextTemplate from "../cards/sampleText";
import CareerGroup from "../groups/careerGroup";

const Careers = () => {
    const careerBenefits = [
        {
            id: 1,
            title: "Careers with Codehub Technologies",
            description: "Benefits",
            pic_url:
                "https://img.freepik.com/premium-photo/businessman-man-hand-hold-interface-question-marks-sign-web-ask-quiestion-online-faq-concept-what-where-when-how-why-search-information-internet_150455-4919.jpg?w=900",
        },
    ];
    return (
        <>
            <PageTitle title="Careers" />
            <TextTemplate dataList={careerBenefits} />
            <TeamGroup />
            <CareerGroup />
            <section className="container py-10">
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
