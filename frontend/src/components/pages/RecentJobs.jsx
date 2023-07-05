import RecentJobCard from '../cards/recentJobCard';
import PageTitle from './pageTitle';
import { useContext, useState, useEffect } from 'react';
import { JobContext, CategoryContext } from '../../App';
import Nav from 'react-bootstrap/Nav';
import ReactPaginate from "react-paginate";
import { Link } from 'react-router-dom';
import MailSubscription from '../cards/emailSub';
import ContactForm from '../cards/contactForm';

function Items({ currentItems }) {


  return (
    <section className='row row-cols-1 row-cols-lg-3 g-6 justify-content-center'>
      {currentItems && currentItems.map((item) => (
        <Link
          className='text-decoration-none'
          to={'/recent-jobs/' + item.slug}
        >
          <RecentJobCard
            key={item.id}
            title={item.title}
            body={item.safe_summary_html}
            category={item.category}
            thumbnail={item.get_image_url}
            date={item.date}
          />
        </Link>
      ))}
    </section>
  );
}

function PaginatedItems({ itemsPerPage, data, selectedCategory }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const dataList = data
  const items = Object.values(dataList);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [selectedCategory]);


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

        {Object.keys(items).length > itemsPerPage
          ?
          <ReactPaginate
            previousLabel={`Prev`}
            nextLabel={'Next'}
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            marginPagesDisplayed={3}
            // CSS Classes
            containerClassName={'pagination justify-content-center mt-6'}
            pageClassName={'page-item me-2'}
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


function RecentJob() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const jobs = useContext(JobContext)
  // const categories = useContext(CategoryContext)
  const categories = []

  useEffect(() => {
    const filtered = selectedCategory
      ? jobs.filter((item) => item.category === selectedCategory)
      : jobs;
    setFilteredProducts(filtered);
  }, [selectedCategory, jobs]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  return (
    <>
      <PageTitle title="Recent Jobs" />

      <section className='container py-8'>
        <Nav variant="pills" defaultActiveKey="all" className='mb-6 justify-content-center'>
          <Nav.Item>
            <Nav.Link
              eventKey="all"
              onClick={() => handleCategoryChange('')}
            >
              All
            </Nav.Link>
          </Nav.Item>
          {categories.map(item => (
            <Nav.Item>
              <Nav.Link
                eventKey={item}
                onClick={() => handleCategoryChange(item)}
                active={selectedCategory === item}
              >
                {item}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>


        <PaginatedItems itemsPerPage={3} data={filteredProducts} selectedCategory={selectedCategory} />


      </section>
      <MailSubscription />
      <ContactForm />
    </>
  );
}

export default RecentJob;