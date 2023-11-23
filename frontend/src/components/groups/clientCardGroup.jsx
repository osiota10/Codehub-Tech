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
                <div className="container py-10">
                    <header className="text-center mb-3">
                        <h2>Our Clients</h2>
                        <h6>Trusted by these Remarkable Clients</h6>
                    </header>

                    <Slider {...settings}>
                        {client.map((item) => (
                            <Client
                                id={item.id}
                                name={item.name_of_client}
                                logo={item.get_logo_url}
                            />
                        ))}
                    </Slider>
                </div>
            )}
        </>
    );
};

export default ClientGroup;
