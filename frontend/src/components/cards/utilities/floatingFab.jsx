import LoaderIcon from "./loader";

const FabIcon = () => {
    return (
        <a href='#' target="_blank" style={{ position: 'fixed', bottom: 48, right: 32 }}>
            {/* <PulseDot style={{ fontSize: '3.5rem' }} color='#075e54' className='position-relative'>

        </PulseDot> */}
            <LoaderIcon>

            </LoaderIcon>

            <i className="fa-brands fa-whatsapp fs-3 position-absolute top-50 start-50 translate-middle text-success"></i>
        </a>
    );
}

export default FabIcon;