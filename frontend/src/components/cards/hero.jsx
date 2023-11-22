import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import Stat from "./stat";
import { ServiceContext } from "../../App";
import { Link } from "react-router-dom";

const settings = {
    dots: true,
    arrows: false,
    className: "center",
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 1,
    swipeToSlide: true,
    // afterChange: function (index) {
    //     console.log(
    //         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //     );
    // },
};

const HeroSection = () => {
    const services = useContext(ServiceContext);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getStyle = (imgUrl) => {
        const style = {
            backgroundImage: `linear-gradient(to right, rgb(255, 255, 255), rgba(255, 255, 255, 0.0)), url(${imgUrl})`,
            height: "100%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "inset 0 0 0 100vh rgba(235, 237, 240, 0.93)",
        };

        // Conditionally delete properties and values
        if (screenWidth > 991) {
            delete style.boxShadow;
        }

        return style;
    };

    return (
        <section className="card hero custom-slider">
            <Slider {...settings}>
                {services.map((item) => (
                    <section className="" key={item.id}>
                        <section
                            className="ratio ratio-16x9"
                            style={getStyle(item.get_hero_image_url)}
                        ></section>

                        <div className="container py-5 position-absolute top-50 start-50 translate-middle w-100">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h2>{item.title}</h2>
                                    <p>{item.hero_snippet}</p>
                                    <Link
                                        to={"/services/" + item.slug}
                                        className="btn btn-primary text-decoration-none"
                                    >
                                        See More
                                    </Link>

                                    {Object.keys(item.stats).length ===
                                    0 ? null : (
                                        <section className="mt-4">
                                            <Stat statList={item.stats} />
                                        </section>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
            </Slider>
        </section>
    );
};

export default HeroSection;
