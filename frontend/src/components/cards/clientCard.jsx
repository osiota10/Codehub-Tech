import TextTruncate from 'react-text-truncate';

function Client({ id, name_of_client, logo }) {
    return (
        <>
            <section className='card mx-auto' style={{ maxWidth: '379px' }} key={id}>
                <div className='card-body d-flex align-items-center'>
                    <img src={logo} className="card-img me-3" alt="..." style={{ maxWidth: '80px' }} />

                    <TextTruncate
                        line={3}
                        element="h6"
                        truncateText="…"
                        text={name_of_client}
                    />
                </div>
            </section>
        </>
    );
}

export default Client;