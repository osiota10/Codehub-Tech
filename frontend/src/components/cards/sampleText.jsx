import ImageHolder from "./imageHolder";


function TextTemplate() {
    return ( 
        <section className="container py-10">
            <section className="row align-items-center">
                <section className="col-lg-6">
                    <ImageHolder/>
                </section>

                <section className="col-lg-6">
                    <h3>Sample Heading</h3>
                    <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo adipisci magnam recusandae illo asperiores at porro 
                        architecto tempore illum. Id commodi non eius ratione 
                        nesciunt deserunt officia rem quas animi Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo adipisci magnam recusandae illo asperiores at porro 
                        architecto tempore illum. Id commodi non eius ratione 
                        nesciunt deserunt officia rem quas animi</p>
                </section>
            </section>

            <section className="row align-items-center mt-7">
                <section className="col-lg-6">
                    <h3>Sample Heading 2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo adipisci magnam recusandae illo asperiores at porro 
                        architecto tempore illum. Id commodi non eius ratione 
                        nesciunt deserunt officia rem quas animiLorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quo adipisci magnam recusandae illo asperiores at porro 
                        architecto tempore illum. Id commodi non eius ratione 
                        nesciunt deserunt officia rem quas animi</p>
                </section>
                <section className="col-lg-6">
                    <ImageHolder/>
                </section>
            </section>
        </section>
     );
}

export default TextTemplate;