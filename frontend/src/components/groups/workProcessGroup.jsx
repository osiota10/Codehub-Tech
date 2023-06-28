import WorkProcess from "../cards/workProcess";
import ImageHolder from "../cards/imageHolder";

function WorkProcessGroup() {
    return (
        <section className="container py-10">
            <h2 className="text-center mb-8">Our Work Process</h2>
            <section className="row g-4 align-items-center">
                <section className="col-lg-6">
                    <ImageHolder />
                </section>
                <section className="col-lg-6">
                    <WorkProcess />
                    <WorkProcess />
                    <WorkProcess />
                    <WorkProcess />
                </section>
            </section>
        </section>
    );
}

export default WorkProcessGroup;