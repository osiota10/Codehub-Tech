import Pricing from "../cards/pricing";

function PricingGroup({ priceList, serviceTitle }) {

    return (
        <section className="container py-10">
            <h2 className='text-center mb-8'>Pricing</h2>
            <div className='row row-cols-1 row-cols-lg-3 g-6 justify-content-center'>
                {priceList.map((item) =>
                    <Pricing
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        description={item.description}
                        pricingFeatures={item.pricing_features}
                        serviceName={serviceTitle}
                    />
                )}
            </div>
        </section>
    );
}

export default PricingGroup;