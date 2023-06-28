

const pic = {
    url: 'https://picsum.photos/200'
}

function WorkProcess() {
    return (
        <section>
            <section className="card custom-card" style={{ marginBottom: '1px' }}>
                <div className="row g-0">
                    <section className="card-body d-flex">
                        <div className="col-md-2 d-flex flex-column align-items-center me-2">
                            <i class="fa-sharp fa-solid fa-credit-card mb-1 fs-1 text-primary"></i>
                            {/* <img src={pic.url} className="img-fluid mb-1" alt="..." style={{ maxWidth: '50px' }} /> */}
                            <div className="bg-primary" style={{ minHeight: '50%' }}>
                                <div className="vr" style={{ width: '4px' }}></div>
                            </div>
                        </div>

                        <section className="col-md-10">
                            <header className="d-flex justify-content-between">
                                <h5 className="card-title">Card title</h5>
                                <div>
                                    <span className="badge bg-primary align-middle">Step 1</span>
                                </div>
                            </header>

                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </section>
                    </section>
                </div>
            </section>
        </section>
    );
}

export default WorkProcess;