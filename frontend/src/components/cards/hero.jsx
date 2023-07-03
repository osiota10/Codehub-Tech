import { useContext } from 'react'
import Slider from 'react-slick';
import Stat from './stat';
import { ServiceContext } from '../../App';
import { Link } from 'react-router-dom';

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

const HeroSection = () => {
    const services = useContext(ServiceContext)

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
                            {services.map((item) =>
                                <section className="custom-slider" key={item.id}>
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <h2>{item.title}</h2>
                                            <p>{item.hero_snippet}</p>
                                            <Link
                                                to={'/services/' + item.slug}
                                                className='btn btn-primary text-decoration-none'
                                            >
                                                See More
                                            </Link>

                                            {
                                                Object.keys(item.stats).length === 0
                                                    ?
                                                    null :
                                                    <section className="mt-4">
                                                        <Stat statList={item.stats} />
                                                    </section>
                                            }
                                        </div>
                                        <div className="col-lg-6 d-none d-lg-block">
                                            <img src={item.get_hero_image_url} className='img-fluid ms-auto' alt="" />
                                        </div>
                                    </div>
                                </section>
                            )}
                        </Slider>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;