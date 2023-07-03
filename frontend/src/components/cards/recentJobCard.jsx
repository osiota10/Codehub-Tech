import React from 'react'
import TextTruncate from 'react-text-truncate';


function RecentJobCard({ key, title, body, category, thumbnail, date }) {
    return (
        <section className='col'>
            <section className="card mx-auto" style={{ maxWidth: '379px' }} key={key}>
                <div className='ratio ratio-16x9'>
                    <img src={thumbnail} className="card-img-top mb-4" alt="..." />
                </div>
                <section className="card-body">
                    <TextTruncate
                        line={4}
                        element="h5"
                        truncateText="…"
                        text={title}
                        className='card-title'
                    />
                    <small className='fw-bold text-primary'><i class="fa-sharp fa-solid fa-calendar-days me-1"></i> {date}</small>
                    <TextTruncate
                        line={6}
                        element="p"
                        truncateText="…"
                        text={body}
                        className='card-text text-secondary'
                    />

                </section>
                <div class="card-footer text-primary fw-bold">
                    {category.map((item) =>
                        <small key={item.id}>{item.name}</small>
                    )}

                </div>
            </section>
        </section>
    );
}

export default RecentJobCard;