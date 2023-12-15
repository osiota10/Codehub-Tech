import Client from "../cards/clientCard";

function Technologies(props) {
    const { techList } = props;
    const { is_recent_job } = props;

    return (
        <section className="container py-10">
            <header className="text-center mb-4">
                <h2>
                    {is_recent_job
                        ? "Technologies and Plaforms used"
                        : "Technologies"}
                </h2>
                <h6>{is_recent_job ? null : "Our Technological Mastery"}</h6>
            </header>

            <section className="row row-cols-sm-2 row-cols-lg-5 g-6 justify-content-center">
                {techList
                    .sort((a, b) => a.id - b.id)
                    .map((item) => (
                        <section className="col">
                            <Client
                                id={item.id}
                                name={item.name_of_technology}
                                logo={item.get_logo_url}
                            />
                        </section>
                    ))}
            </section>
        </section>
    );
}

export default Technologies;
