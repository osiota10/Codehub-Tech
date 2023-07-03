

function ImageHolder({ image }) {
    return (
        <div className='position-relative image-holder'>
            <img src={process.env.PUBLIC_URL + '/Vector.svg'} className="img-fluid  image-holder-bg" alt="..." />
            <img src={image} className="position-absolute top-50 start-50 translate-middle img-fluid" alt="..." style={{ maxWidth: '90%' }} />
        </div>
    );
}

export default ImageHolder;