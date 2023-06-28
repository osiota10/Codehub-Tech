import React, { Component } from 'react'
import Slider from 'react-slick';
import Stat from './stat';

const pic = {
    url: 'https://picsum.photos/300/200'
}

const settings = {
    dots: true,
    arrows: false,
    className: "center",
    infinite: true,
    centerPadding: "160px",
    slidesToShow: 1,
    swipeToSlide: true,
    afterChange: function (index) {
        console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
    },
};

class HeroSection extends Component {


    state = {}
    render() {
        const myStyle = {
            backgroundImage: `url(${pic.url})`,
            height: '100%',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: 'inset 0 0 0 100vh rgba(235, 237, 240, 0.93)',
        };
        return (
            <section className="card hero" >
                <div className="">
                    <section className="ratio ratio-16x9" style={myStyle}>

                    </section>

                    <div className="card-img-overlay img-dark-overlay">
                        <div className="container py-5 position-absolute top-50 start-50 translate-middle w-100">
                            <Slider {...settings}>
                                <section className="custom-slider">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <h2>Web Development</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                                purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit ut aliquam, purus sit amet purus sit amet luctus venenatis
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                            </p>
                                            <button className='btn btn-primary'>Request a Quote</button>

                                            <section className="mt-4">
                                                <Stat />
                                            </section>
                                        </div>
                                        <div className="col-lg-6 d-none d-lg-block">
                                            <img src="HeroImage.png" className='img-fluid ms-auto' alt="" />
                                        </div>
                                    </div>
                                </section>


                                <section className="custom-slider">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <h2>Web Development</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                                                purus sit amet luctus venenatis Lorem ipsum dolor sit amet, consectetur
                                                adipiscing elit ut aliquam, purus sit amet purus sit amet luctus venenatis
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                                            </p>
                                            <button className='btn btn-primary'>Request a Quote</button>

                                            <section className="mt-4">
                                                <Stat />
                                            </section>
                                        </div>
                                        <div className="col-lg-6 d-none d-lg-block">
                                            <img src="HeroImage.png" className='img-fluid ms-auto ' alt="" />
                                        </div>
                                    </div>
                                </section>
                            </Slider>

                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default HeroSection;