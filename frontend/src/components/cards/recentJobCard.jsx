import React from "react";
import TextTruncate from "react-text-truncate";

export const formatDateWithTime = (dateString) => {
    const date = new Date(dateString);
    const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
    };

    // Check if the input date string includes time information
    if (dateString.includes("T")) {
        options.hour = "numeric";
        options.minute = "numeric";
        options.second = "numeric";
        options.hour12 = true; // If you want to use 12-hour format
    }

    return date.toLocaleDateString("en-US", options);
};

function RecentJobCard({
    id,
    title,
    body,
    category,
    thumbnail,
    date,
    location,
}) {
    return (
        <section className="col" key={id}>
            <section className="card mx-auto" style={{ maxWidth: "379px" }}>
                <div className="ratio ratio-16x9">
                    <img
                        src={thumbnail}
                        className="card-img-top mb-4"
                        alt={`Screenshot of ${title}`}
                    />
                </div>
                <section className="card-body">
                    <TextTruncate
                        line={4}
                        element="h5"
                        truncateText="…"
                        text={title}
                        className="card-title"
                    />
                    <small className="fw-bold text-primary me-3">
                        <i class="fa-sharp fa-solid fa-calendar-days me-1"></i>
                        {formatDateWithTime(date)}
                    </small>
                    <span>
                        <i className="fa-solid fa-globe text-primary me-1"></i>
                        {location}
                    </span>
                    <TextTruncate
                        line={6}
                        element="p"
                        truncateText="…"
                        text={body}
                        className="card-text text-secondary"
                    />
                </section>
                <div class="card-footer text-primary fw-bold">
                    {category.map((item) => (
                        <small key={item.id}>{item.name}</small>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default RecentJobCard;
