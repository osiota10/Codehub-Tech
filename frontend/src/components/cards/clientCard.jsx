import React from 'react';
import TextTruncate from 'react-text-truncate';

const pic = {
    url: 'https://picsum.photos/200'
}

function Client({ key, name }) {
    return (
        <>
            <section className='card mx-auto' style={{ maxWidth: '379px' }} key={key}>
                <div className='card-body d-flex align-items-center'>
                    <img src={pic.url} className="card-img me-3" alt="..." style={{ maxWidth: '80px' }} />

                    <TextTruncate
                        line={2}
                        element="h5"
                        truncateText="…"
                        text={name}
                    />
                </div>
            </section>
        </>
    );
}

export default Client;