import Client from "../cards/clientCard";


function Technologies(props) {
  const { techList } = props;

  return (
    <section className="container py-10">
      <h2 className="text-center mb-4">Technologies</h2>
      <section className='row row-cols-1 row-cols-lg-3 g-6 justify-content-center'>
        {techList.map(item =>
          <section className="col">
            <Client
              id={item.id}
              name={item.name_of_technology}
              logo={item.get_logo_url}
            />
          </section>
        )}
      </section>
    </section>
  );
}

export default Technologies;