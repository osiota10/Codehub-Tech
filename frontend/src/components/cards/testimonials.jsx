import parse from 'html-react-parser';

function TestimonialCard({ image, key, message, name, position }) {
    return (
        <>
            <div className='container '>
                <div className='row' key={key}>
                    <div className='col-lg-5 d-flex justify-content-around align-items-center'>
                        <img src='Frame.svg' className="img-fluid" alt="..." style={{ maxWidth: '85.76px', maxHeight: '276px' }} />
                        <section className="ratio ratio-1x1">
                            <img src={image} className=" rounded-circle" alt="..." />
                        </section>
                        <img src='Frame.svg' className="img-fluid" alt="..." style={{ maxWidth: '85.76px', maxHeight: '276px' }} />
                    </div>
                    <div className='col-lg-7'>
                        <i class="fa-solid fa-quote-left text-primary fs-3"></i>
                        <p>{parse(`${message}`)}
                        </p>
                        <i class="fa-solid fa-quote-right text-primary d-flex justify-content-end fs-3"></i>

                        <div>
                            <h5>{name}</h5>
                            <small className='text-primary fw-bold'>{position}</small>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TestimonialCard;