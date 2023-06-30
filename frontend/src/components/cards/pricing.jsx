
function Pricing({ id, title, price, description, pricingFeatures }) {

    return (
        <section className="col" key={id}>
            <section className="card mx-auto" style={{ maxWidth: '379px' }}>
                <section className="card-body">
                    <header className="text-center">
                        <h6>{title}</h6>
                        <h4>N{price}</h4>
                    </header>

                    <p className="text-center">{description}</p>

                    <section>
                        <section class="table-responsive mt-1">
                            <table class="table ">
                                <thead class="table-primary">
                                    <tr>
                                        <th scope="col" colspan="3" class="text-center">Features</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pricingFeatures.map((item) =>
                                        <tr key={item.id}>
                                            <td>
                                                <i className={item.is_featured ? "fa-solid fa-check" : "fa-solid fa-xmark"}>
                                                </i>
                                            </td>
                                            <td>{item.name}</td>
                                        </tr>
                                    )}
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