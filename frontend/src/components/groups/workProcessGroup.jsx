import WorkProcess from "../cards/workProcess";
import ImageHolder from "../cards/imageHolder";
import { useContext } from "react";
import { WorkProcessContext } from "../../App";

const pic = {
    url: "https://img.freepik.com/premium-photo/young-african-businesswoman-presenting-data-analysis-dashboard-tv-concord_31965-115410.jpg?w=900",
};

const WorkProcessGroup = () => {
    const workProcess = useContext(WorkProcessContext);

    return (
        <>
            {Object.keys(workProcess).length === 0 ? null : (
                <section className="container py-10">
                    <header className="text-center mb-4">
                        <h2>Our Work Process</h2>
                        <h6>The Magic Behind Our Work Process!</h6>
                    </header>

                    <section className="row g-4 align-items-center">
                        <section className="col-lg-6">
                            <ImageHolder image={pic.url} />
                        </section>

                        <section className="col-lg-6">
                            {workProcess
                                .sort((a, b) => a.id - b.id)
                                .map((item) => (
                                    <WorkProcess
                                        id={item.id}
                                        title={item.title}
                                        step={item.step}
                                        font_awesome_class={
                                            item.font_awesome_class
                                        }
                                        description={item.description}
                                    />
                                ))}
                        </section>
                    </section>
                </section>
            )}
        </>
    );
};

export default WorkProcessGroup;
