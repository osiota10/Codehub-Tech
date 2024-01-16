import Spinner from "react-bootstrap/Spinner";

const LoaderIcon = () => {
    return (
        <Spinner
            animation="grow"
            as="span"
            className="me-1"
            size="sm"
            role="status"
            aria-hidden="true"
        >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default LoaderIcon;

export const PageLoader = () => {
    const styles = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(255, 255, 255, 1)", // Adjust the background color and opacity
        zIndex: 9999, // Ensure it's on top of other elements
        display: "flex", // Initially hide the overlay
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <div id="overlay" style={styles}>
            <LoaderIcon />
        </div>
    );
};
