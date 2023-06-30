import TextTruncate from 'react-text-truncate';


function Service({ key, title, body, image }) {
    return (
        <>
            <section className="col mx-auto" key={key}>
                <section className="card mx-auto" style={{ maxWidth: '379px' }}>
                    <div className='ratio ratio-16x9'>
                        <img src={image} className="card-img-top mb-4" alt="..." />
                    </div>
                    <section className="card-body">
                        <TextTruncate
                            line={2}
                            element="h4"
                            truncateText="…"
                            text={title}
                            className='card-title'
                        />

                        <TextTruncate
                            line={5}
                            element="p"
                            truncateText="…"
                            text={body}
                            className='card-text text-secondary'
                        />
                    </section>
                </section>
            </section>
        </>
    );
}

export default Service;