import { useEffect, useState, useContext } from "react";
import Client from "../cards/clientCard";
import Slider from "react-slick";
import { getSliderSettings } from "./recentJobGroup";
import { ClientContext } from "../../App";

const ClientGroup = () => {
    const settings = getSliderSettings(false, false, 3, false);

    const client = useContext(ClientContext);

    return (
        <>
            {Object.keys(client).length === 0 ? null : (
                <section className="py-10">
                    <section className="container">
                        <header className="text-center mb-3">
                            <h2>Our Clients</h2>
                            <h6>Trusted by these Remarkable Clients</h6>
                        </header>

                        <Slider {...settings}>
                            {client.map((item) => (
                                <>
                                    {/* <Client
                                        id={item.id}
                                        name={item.name_of_client}
                                        logo={item.get_logo_url}
                                    /> */}
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
                                                alt={`logo of`}
                                                style={{ maxWidth: "80px" }}
                                            />
                                            <h6>{item.name_of_client}</h6>
                                        </div>
                                    </section>
                                </>
                            ))}
                        </Slider>
                    </section>
                </section>
            )}
        </>
    );
};

export default ClientGroup;
