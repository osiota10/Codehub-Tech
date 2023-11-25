import { Link } from "react-router-dom";

const pic = {
    url: "https://img.freepik.com/premium-photo/abstract-plexus-geometrical-shapes-connection-concept-digital-communication-technology-network-background_34629-858.jpg?w=996",
};

const getStyle = (imgUrl) => {
    return {
        backgroundImage: `url(${imgUrl})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // boxShadow: 'inset 0 0 0 100vh rgba(235, 237, 240, 0.93)',
    };
};

const NoPage = () => {
    return (
        <section
            style={getStyle(pic.url)}
            className="d-flex justify-content-center align-items-center text-center"
        >
            <section className="container">
                <section className="row text-white justify-content-center">
                    <section className="col-lg-6">
                        <i
                            style={{ fontSize: "6rem" }}
                            class="fa-solid fa-triangle-exclamation"
                        ></i>
                        <h1 style={{ fontSize: "5rem" }} className="text-white">
                            Oops!
                        </h1>
                        <h4 className="text-white">
                            404 Error - Page not Found
                        </h4>
                        <p>
                            The page you are looking for might have been removed
                            or had its name changed or is temporary unavailable
                        </p>
                        <Link
                            className="btn btn btn-light text-decoration-none"
                            to="/"
                        >
                            Go to Homepage
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default NoPage;
