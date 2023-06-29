

const pic = {
    url: 'https://picsum.photos/200'
}

function TestimonialCard(image, key) {
    return (
        <>
            <div className='container '>
                <div className='row' key={key}>
                    <div className='col-lg-5 d-flex justify-content-around align-items-center'>
                        <img src='Frame.svg' className="img-fluid" alt="..." style={{ maxWidth: '85.76px', maxHeight: '276px' }} />
                        <img src={pic.url} className="img-fluid rounded-circle flex-grow-1" alt="..." style={{ maxWidth: '276px', maxHeight: '276px' }} />
                        <img src='Frame.svg' className="img-fluid" alt="..." style={{ maxWidth: '85.76px', maxHeight: '276px' }} />
                    </div>
                    <div className='col-lg-7'>
                        <i class="fa-solid fa-quote-left text-primary fs-3"></i>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, asperiores.
                            Officia impedit numquam, omnis veritatis dolor temporibus? Ea harum non soluta,
                            porro obcaecati impedit cupiditate, illo labore nobis ipsa eaque.
                        </p>
                        <i class="fa-solid fa-quote-right text-primary d-flex justify-content-end fs-3"></i>

                        <div>
                            <h5>Jane Cooper</h5>
                            <small className='text-primary fw-bold'>CEO, ABC Company Ltd</small>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TestimonialCard;