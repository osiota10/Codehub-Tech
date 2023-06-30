

function Stat({ statList }) {

    return (
        <section className="row row-cols-1 row-cols-lg-3 g-1 text-center justify-content-center">
            {statList.map((item) =>
                <section className="col-4" key={item.id}>
                    <h4>{item.stat_figure}+</h4>
                    <small className="fw-light">{item.stat_title}</small>
                </section>
            )}
        </section>
    );
}

export default Stat;