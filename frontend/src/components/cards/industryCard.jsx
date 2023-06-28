import React from 'react';
import TextTruncate from 'react-text-truncate';

const pic = {
    url: 'https://picsum.photos/200'
}


function IndustryCard({ key, name }) {
    return (
        <section className='col'>
            <section className="card mx-auto" style={{ maxWidth: '379px' }} key={key}>
                <section className="card-body">
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={pic.url} className="card-img mb-4" alt="..." style={{ maxWidth: '112px' }} />
                    </div>
                    <TextTruncate
                        line={2}
                        element="h5"
                        truncateText="…"
                        text={name}
                    />
                </section>

            </section>
        </section>
    );
}

export default IndustryCard;