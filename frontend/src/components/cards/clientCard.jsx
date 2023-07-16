import TextTruncate from 'react-text-truncate';

function Client({ id, name, logo }) {
    return (
        <section className='card mx-auto' style={{ maxWidth: '379px' }} key={id}>
            <div className='card-body d-flex align-items-center'>
                <img src={logo} className="card-img me-3" alt={`logo of ${name}`} style={{ maxWidth: '80px' }} />

                <TextTruncate
                    line={3}
                    element="h6"
                    truncateText="…"
                    text={name}
                />
            </div>
        </section>
    );
}

export default Client;