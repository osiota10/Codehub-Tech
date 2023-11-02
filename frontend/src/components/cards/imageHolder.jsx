function ImageHolder({ image }) {
    return (
        <div className="position-relative image-holder">
            <svg
                width="600"
                height="563"
                viewBox="0 0 600 563"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="img-fluid mx-auto d-block image-holder-bg"
                style={{ maxWidth: "85%" }}
            >
                <path
                    d="M495.781 53.2219C553.276 79.3559 602.327 137.253 599.915 193.943C597.502 250.232 543.224 305.716 502.616 362.407C462.41 419.097 435.874 477.798 384.812 516.798C334.153 555.798 258.967 575.499 199.06 553.385C139.555 531.272 95.3285 467.746 59.9472 401.004C24.9679 334.664 -1.16607 265.912 0.0401112 191.531C1.24629 117.552 29.7926 38.3457 85.277 11.8097C141.163 -15.1284 223.988 11.0056 298.369 21.4592C372.75 31.9127 438.286 26.6859 495.781 53.2219Z"
                    fill="#0F4C81"
                />
            </svg>
            <img
                src={image}
                className="position-absolute top-50 start-50 translate-middle img-fluid rounded-4"
                alt="..."
                style={{ maxWidth: "90%" }}
            />
        </div>
    );
}

export default ImageHolder;
