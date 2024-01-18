function Client({ id, name, logo }) {
    return (
        <section
            className="card mx-auto"
            style={{ maxWidth: "379px" }}
            key={id}
        >
            <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <img
                    src={logo}
                    className="card-img mb-2"
                    alt={`logo of ${name}`}
                    style={{ maxWidth: "60px" }}
                />
                <h6>{name}</h6>
            </div>
        </section>
    );
}

export default Client;
