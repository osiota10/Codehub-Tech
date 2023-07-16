import Accordion from 'react-bootstrap/Accordion';
import parse from 'html-react-parser';

const Faq = ({ faqList }) => {
  return (
    <div className='container py-10'>
      <h2 className='text-center mb-4'>Frequently Asked Questions</h2>

      <section className='row'>
        <section className='col-lg-10 mx-auto'>
          <Accordion defaultActiveKey={faqList[0].id}>
            {faqList.map((item) =>
              <Accordion.Item eventKey={item.id} className='mb-5 shadow-sm' key={item.id}>
                <Accordion.Header>{item.faq_question}</Accordion.Header>
                <Accordion.Body>
                  {parse(`${item.faq_answer}`)}
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Accordion>
        </section>
      </section>
    </div>
  );
}

export default Faq;