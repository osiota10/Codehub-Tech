function ImageHolder({ image }) {
    return (
        <div className="position-relative image-holder">
            <img
                src={process.env.PUBLIC_URL + "/Vector.svg"}
                className="img-fluid mx-auto d-block image-holder-bg"
                alt="..."
                style={{ maxWidth: "85%" }}
            />
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
