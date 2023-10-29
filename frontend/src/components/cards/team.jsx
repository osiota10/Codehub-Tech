import Socials from "./socials";

function OurTeam({ name, position, image, socialList }) {
    return (
        <section className="col">
            <section className="card mx-auto" style={{ maxWidth: "379px" }}>
                <div
                    className="bg-primary athlete-bg"
                    style={{ height: "120px" }}
                ></div>

                <section className="card-body fw-bolder text-primary">
                    <section className="d-flex justify-content-center mt-n12">
                        <img
                            src={image}
                            className="mb-4 rounded-circle"
                            width="170"
                            height="170"
                            alt={name}
                        />
                    </section>
                    <section className="text-center">
                        <h5>{name}</h5>
                        <p>{position}</p>

                        {socialList ? (
                            <Socials small={true} socials={socialList} />
                        ) : null}
                    </section>
                </section>
            </section>
        </section>
    );
}

export default OurTeam;
