import { useContext } from "react";
import Stat from "./stat";
import { ServiceContext } from "../../App";
import Carousel from "react-bootstrap/Carousel";

const pic = {
    url: "https://img.freepik.com/premium-photo/abstract-blue-plexus-background_161488-67.jpg?w=996",
};

const HeroSection = () => {
    const services = useContext(ServiceContext);

    return (
        <Carousel fade interval={15000}>
            {services.map((item) => (
                <Carousel.Item className="hero">
                    <section className="ratio ratio-21x9">
                        <img src={pic.url} className="img-fluid hero-img" />
                    </section>
                    <Carousel.Caption className="d-flex  cap">
                        <section className="row align-items-center">
                            <section className="col-md">
                                <h3 className="text-white">{item.title}</h3>
                                <p className="text-start">
                                    {item.hero_snippet}
                                </p>

                                {Object.keys(item.stats).length === 0 ? null : (
                                    <section className="mt-4 stat-text">
                                        <Stat statList={item.stats} />
                                    </section>
                                )}
                            </section>
                            <section className="col-md">
                                <img
                                    src={item.get_hero_image_url}
                                    className="img-fluid hero-side-img"
                                />
                            </section>
                        </section>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default HeroSection;
