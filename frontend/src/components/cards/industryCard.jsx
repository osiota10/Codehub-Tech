import React from 'react';
import TextTruncate from 'react-text-truncate';


function IndustryCard({ key, name, logo }) {
    return (
        <section className='col'>
            <section className="card mx-auto" style={{ maxWidth: '379px' }} key={key}>
                <section className="card-body text-center">
                    <div className='d-flex align-items-center justify-content-center'>
                        <img src={logo} className="card-img mb-4" alt="..." style={{ maxWidth: '112px' }} />
                    </div>
                    <TextTruncate
                        line={2}
                        element="h6"
                        truncateText="…"
                        text={name}
                    />
                </section>

            </section>
        </section>
    );
}

export default IndustryCard;