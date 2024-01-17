import React, { useContext } from "react";
import RecentJobCard from "../cards/recentJobCard";
import Slider from "react-slick";
import { JobContext } from "../../App";
import { Link } from "react-router-dom";

export const getSliderSettings = ({
    dots,
    arrows,
    slidesToShow,
    removeAutoPlay,
    slidesToShowAt1024Breakpoint,
    slidesToShowAt992Breakpoint,
    objectCount,
}) => {
    const sliderSettings = {
        dots: dots,
        arrows: arrows,
        className: "center",
        infinite: objectCount > slidesToShow ? true : false,
        centerPadding: "160px",
        slidesToShow: slidesToShow,
        swipeToSlide: true,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: slidesToShowAt1024Breakpoint,
                    slidesToScroll: 1,
                    infinite:
                        objectCount > slidesToShowAt1024Breakpoint
                            ? true
                            : false,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: slidesToShowAt992Breakpoint,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite:
                        objectCount > slidesToShowAt992Breakpoint
                            ? true
                            : false,
                },
            },
        ],
    };

    // Conditionally hide some properties
    if (removeAutoPlay) {
        delete sliderSettings.speed;
        delete sliderSettings.autoplaySpeed;
    }

    return sliderSettings;
};

function RecentJobGroup({ filterCategory, currentItem }) {
    const sliderSettings = getSliderSettings(true, true, 3, true);

    const jobs = useContext(JobContext);

    // Extract category names from the passed category object
    const categoryNames = filterCategory
        ? filterCategory.map((cat) => cat.name)
        : [];

    const filteredItems = categoryNames.length
        ? jobs.filter((item) => {
              // Assuming item.category is a list of objects
              return (
                  item.category.some((cat) =>
                      categoryNames.includes(cat.name)
                  ) && item.id !== currentItem
              );
          })
        : jobs;

    return (
        <>
            {Object.keys(filteredItems).length === 0 ? null : (
                <div className="container py-10">
                    <header className="text-center mb-3">
                        <h2>
                            {filterCategory
                                ? "Related Jobs Done"
                                : "Our Recent Jobs"}
                        </h2>
                        <h6>
                            {filterCategory
                                ? "Explore Related Jobs!"
                                : "Explore Our Recent Jobs!"}
                        </h6>
                    </header>

                    <Slider {...sliderSettings}>
                        {filteredItems.slice(0, 9).map((item) => (
                            <Link
                                className="text-decoration-none"
                                to={"/recent-jobs/" + item.slug}
                            >
                                <RecentJobCard
                                    id={item.id}
                                    title={item.title}
                                    body={item.safe_summary_html}
                                    category={item.category}
                                    thumbnail={item.get_image_url}
                                    date={item.date}
                                />
                            </Link>
                        ))}
                    </Slider>
                    <div className="d-flex justify-content-center">
                        <Link
                            to="/recent-jobs"
                            className="btn btn-primary mt-6"
                        >
                            See all Jobs
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
}

export default RecentJobGroup;
