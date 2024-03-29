import React from "react";
import Service from "../cards/serviceCard";
import { useContext } from "react";
import { ServiceContext } from "../../App";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";

function ServiceGroup({ type }) {
    const service = useContext(ServiceContext);

    const settings = getSliderSettings({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        removeAutoPlay: false,
        slidesToShowAt1024Breakpoint: 2,
        slidesToShowAt992Breakpoint: 1,
        objectCount: Object.keys(service).length,
        speed: 500,
        autoplaySpeed: 15000,
    });

    return (
        <>
            {Object.keys(service).length === 0 ? null : (
                <section>
                    {type ? (
                        <section className="container pt-10">
                            <header className="text-center mb-4">
                                <h2>Our Services</h2>
                                <h6>Discover Our Exceptional Services</h6>
                            </header>

                            <section className="row row-cols-1 row-cols-lg-3 g-6 justify-content-center">
                                {service.slice(0, 6).map((item) => (
                                    <Link
                                        className="text-decoration-none"
                                        to={"/services/" + item.slug}
                                    >
                                        <Service
                                            key={item.id}
                                            title={item.title}
                                            body={item.safe_description_html}
                                            image={item.get_image_url}
                                        />
                                    </Link>
                                ))}
                            </section>
                            {Object.keys(service).length > 6 ? (
                                <section className="d-flex justify-content-center">
                                    <Link
                                        to="/services"
                                        className="btn btn-primary mt-4"
                                    >
                                        See all Services
                                    </Link>
                                </section>
                            ) : null}
                        </section>
                    ) : (
                        <section className="container py-10">
                            <header className="text-center mb-3">
                                <h2>What We Do</h2>
                                <h6>Discover Our Exceptional Services</h6>
                            </header>

                            <Slider {...settings}>
                                {service.map((item) => (
                                    <Link
                                        className="text-decoration-none"
                                        to={"/services/" + item.slug}
                                    >
                                        <Service
                                            key={item.id}
                                            title={item.title}
                                            body={item.safe_description_html}
                                            image={item.get_image_url}
                                        />
                                    </Link>
                                ))}
                            </Slider>
                            {Object.keys(service).length > 1 ? (
                                <section className="d-flex justify-content-center">
                                    <Link
                                        to="/services"
                                        className="btn btn-primary mt-4"
                                    >
                                        See all Services
                                    </Link>
                                </section>
                            ) : null}
                        </section>
                    )}
                </section>
            )}
        </>
    );
}

export default ServiceGroup;
