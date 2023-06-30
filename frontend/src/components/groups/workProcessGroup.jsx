import WorkProcess from "../cards/workProcess";
import ImageHolder from "../cards/imageHolder";
import { useState, useEffect } from "react";
import axios from 'axios';


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
        <section className="container py-10">
            <h2 className="text-center mb-8">Our Work Process</h2>
            <section className="row g-4 align-items-center">
                <section className="col-lg-6">
                    <ImageHolder />
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
    );
}

export default WorkProcessGroup;