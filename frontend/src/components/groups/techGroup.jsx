import Client from "../cards/clientCard";
import { useState, useEffect } from "react";
import axios from "axios";


function Technologies() {
  const [tech, setTech] = useState([])

  useEffect(() => {
    //Technologies
    axios.get(`https://jsonplaceholder.typicode.com/albums/`)
      .then(res => {
        setTech(res.data)
      })
  }, []);

  return (
    <section className="container py-10">
      <h2 className="text-center mb-8">Technologies</h2>
      <section className='row row-cols-1 row-cols-lg-3 g-6'>
        {tech.slice(0, 9).map(item => <section className="col"><Client key={item.id} name={item.title} /></section>)}
      </section>
    </section>
  );
}

export default Technologies;