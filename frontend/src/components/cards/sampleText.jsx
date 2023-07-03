import ImageHolder from "./imageHolder";
import parse from 'html-react-parser';


function TextTemplate({ dataList }) {
    return (

        <section className="container pt-10">
            {
                dataList.map((item) =>
                    <section
                        className={Object.keys(dataList).length > 0 ? "row align-items-center sample-text mb-7" : "row align-items-center sample-text"}
                        key={item.id}>
                        <section className="col-lg-6 one">
                            <ImageHolder image={item.get_image_url} />
                        </section>

                        <section className="col-lg-6 two">
                            <h3>{item.title}</h3>
                            <p className=" ">{parse(`${item.description}`)}</p>
                        </section>
                    </section>
                )
            }
        </section>
    );
}

export default TextTemplate;