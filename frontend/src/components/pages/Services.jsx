import { useContext, useState } from 'react';
import React from 'react'
import Service from '../cards/serviceCard';
import PageTitle from './pageTitle';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../App';
import ReactPaginate from 'react-paginate';
import ContactForm from '../cards/contactForm';
import MailSubscription from '../cards/emailSub';




function Items({ currentItems }) {
  return (
    <section className='container py-8'>
      <section className='row row-cols-1 row-cols-lg-3 g-6 justify-content-center'>
        {currentItems &&
          currentItems.map((item) => (
            <section><Link className='text-decoration-none' to={'/services/' + item.slug}>
              <Service
                key={item.id}
                title={item.title}
                body={item.safe_description_html}
                image={item.get_image_url}
              />
            </Link>
            </section>
          ))}
      </section>
    </section>
  );
}

function PaginatedItems({ itemsPerPage, data }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const services = data
  const items = Object.values(services);
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className='container'>
        <Items currentItems={currentItems} />

        {
          Object.keys(items).length > itemsPerPage
            ?
            <ReactPaginate
              previousLabel={'Prev'}
              nextLabel={'Next'}
              breakLabel="..."
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              renderOnZeroPageCount={null}
              marginPagesDisplayed={3}
              // CSS Classes
              containerClassName={'pagination justify-content-center py-8'}
              pageClassName={'page-item me-1'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item me-5'}
              previousLinkClassName={'page-link'}
              nextClassName={'page-item ms-4'}
              nextLinkClassName={'page-link'}
              breakClassName={'page-item me-1'}
              breakLinkClassName={'page-link'}
              activeClassName={'active'}
            />
            :
            null
        }

      </section>
    </>
  );
}



function Services() {
  const services = useContext(ServiceContext)

  return (
    <>
      <PageTitle title="Services" />

      {
        Object.keys(services).length === 0
          ?
          null
          :
          <PaginatedItems itemsPerPage={9} data={services} />
      }

      <MailSubscription />
      <ContactForm />
    </>
  );
}

export default Services;