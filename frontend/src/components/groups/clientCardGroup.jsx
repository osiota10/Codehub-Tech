import { useContext } from "react";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import { ClientContext } from "../../App";

const ClientGroup = () => {
    const client = useContext(ClientContext);

    const settings = getSliderSettings({
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: true,
        removeAutoPlay: false,
        slidesToShowAt1024Breakpoint: 3,
        slidesToShowAt992Breakpoint: 1,
        objectCount: Object.keys(client).length,
        speed: 5000,
        autoplaySpeed: 5000,
    });

    return (
        <>
            {Object.keys(client).length === 0 ? null : (
                <section className="pt-10">
                    <section className="container">
                        <header className="text-center mb-3">
                            <h2>Our Clients</h2>
                            <h6>Trusted by these Remarkable Clients</h6>
                        </header>

                        <Slider {...settings}>
                            {client.map((item) => (
                                <section
                                    className="mx-auto tint"
                                    style={{
                                        maxWidth: "279px",
                                        filter: "grayscale(100%)",
                                    }}
                                    id={item.id}
                                >
                                    <div className="card-body d-flex flex-row align-items-center justify-content-center">
                                        <img
                                            src={item.get_logo_url}
                                            className="card-img me-2"
                                            alt={`logo of ${item.name_of_client}`}
                                            style={{ maxWidth: "50px" }}
                                        />
                                        <h6 style={{ fontSize: "14px" }}>
                                            {item.name_of_client}
                                        </h6>
                                    </div>
                                </section>
                            ))}
                        </Slider>
                    </section>
                </section>
            )}
        </>
    );
};

export default ClientGroup;
