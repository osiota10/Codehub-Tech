function Stat({ statList }) {
    return (
        <section className="row row-cols-1 row-cols-lg-3 g-1 text-center justify-content-center">
            {statList.map((item) => (
                <section className="col-4" key={item.id}>
                    <h3>{item.stat_figure}+</h3>
                    <p className="fw-bold text-primary">{item.stat_title}</p>
                </section>
            ))}
        </section>
    );
}

export default Stat;
