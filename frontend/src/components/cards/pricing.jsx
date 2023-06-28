
function Pricing() {
    return (
        <section className="col">
            <section className="card mx-auto" style={{ maxWidth: '379px' }}>
                <section className="card-body">
                    <header className="text-center">
                        <h6>Title</h6>
                        <h4>N20,000</h4>
                    </header>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla turpis adipiscing ut sapien.</p>

                    <section>
                        <section class="table-responsive mt-1">
                            <table class="table ">
                                <thead class="table-primary">
                                    <tr>
                                        <th scope="col" colspan="3" class="text-center">Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><i class="fa-solid fa-check"></i></td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fa-solid fa-check"></i></td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fa-solid fa-xmark"></i></td>
                                        <td>item</td>
                                    </tr>
                                    <tr>
                                        <td><i class="fa-solid fa-check"></i></td>
                                        <td>Delivery in 2-4 working days</td>
                                    </tr>
                                </tbody>
                            </table>

                        </section>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-primary mb-3">Order Now</button>
                        </div>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Pricing;