import Pricing from "../cards/pricing";

function PricingGroup() {
    return (
        <section className="container py-10">
            <h2 className='text-center mb-8'>Pricing</h2>
            <div className='row row-cols-1 row-cols-lg-3 g-6 justify-content-center'>
                <Pricing />
                <Pricing />
                <Pricing />
                <Pricing />
            </div>
        </section>
    );
}

export default PricingGroup;