import WorkProcess from "../cards/workProcess";
import ImageHolder from "../cards/imageHolder";
import { useState, useEffect } from "react";
import axios from 'axios';

const pic = {
    url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.roberthalf.com%2Fsites%2Fdefault%2Ffiles%2F2020-01%2F01-music-at-work-rh.jpg&f=1&nofb=1&ipt=f1950c39be4f82691bf490135aff47961ee790f9f931301968cd065f553de62e&ipo=images'
}

const WorkProcessGroup = () => {
    const [workProcess, setWorkProcess] = useState([])

    useEffect(() => {
        // Get Work Process Data
        axios.get(`${process.env.REACT_APP_API_URL}/work-process`)
            .then(res => {
                setWorkProcess(res.data)
            })
    }, [])

    return (
        <>
            {
                Object.keys(workProcess).length === 0
                    ?
                    null
                    :
                    <section className="container py-10">
                        <h2 className="text-center mb-8">Our Work Process</h2>
                        <section className="row g-4 align-items-center">
                            <section className="col-lg-6">
                                <ImageHolder image={pic.url} />
                            </section>

                            <section className="col-lg-6">
                                {workProcess.map((item) =>
                                    <WorkProcess
                                        id={item.id}
                                        title={item.title}
                                        step={item.step}
                                        font_awesome_class={item.font_awesome_class}
                                        description={item.description}
                                    />
                                )}
                            </section>
                        </section>
                    </section>
            }
        </>
    );
}

export default WorkProcessGroup;