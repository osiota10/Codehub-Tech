import Socials from "./socials";

const pic = {
    url: 'https://picsum.photos/200'
}

function OurTeam() {
    return (
        <section className='col'>
            <section className="card mx-auto" style={{ maxWidth: '379px' }} >

                <div className='bg-primary athlete-bg' style={{ height: '120px' }} >
                </div>

                <section className="card-body fw-bolder text-primary">
                    <section className="d-flex justify-content-center mt-n12">
                        <img src={pic.url} className="mb-4 rounded-circle athlete-pix" width="170" height="170" alt="..." />
                    </section>
                    <section className="text-center">
                        <h5>Osiota Samuel Obrozie</h5>
                        <p>Lead Developer</p>
                        <Socials small={true} />
                    </section>

                </section>
            </section>
        </section>
    );
}

export default OurTeam;