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
            <CareerGroup />
            <TeamGroup />
        </>
    );
};

export default Careers;
