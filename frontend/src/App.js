import './main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import Layout from './components/pages/layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import RecentJob from './components/pages/RecentJobs';
import Contact from './components/pages/Contact';
import NoPage from './components/pages/NoPage';
import ServicesDetail from './components/detailedPages/servicesDetail';
import RecentJobDetail from './components/detailedPages/recentJobDetail';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from './components/cards/utilities/scrollToTop';


// Contexts
export const ServiceContext = createContext(null)
export const clientContext = createContext(null)
export const TestimonialContext = createContext(null)
export const JobContext = createContext(null)
export const CategoryContext = createContext(null)


function App() {
  const [service, setService] = useState([]);
  const [client, setClient] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [jobs, setJobs] = useState([])
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //Service
    axios.get(`https://jsonplaceholder.typicode.com/posts/`)
      .then(res => {
        setService(res.data)
      })

    // Clients
    axios.get(`https://jsonplaceholder.typicode.com/albums/`)
      .then(res => {
        setClient(res.data)
      })

    // Testimonials
    axios.get(`https://jsonplaceholder.ir/users`)
      .then(res => {
        setTestimonials(res.data)
      })

    // Recent Jobs
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        setJobs(res.data)

        // Extract unique categories from the products and store them in the state
        const uniqueCategories = [...new Set(res.data.map(product => product.category))];
        setCategories(uniqueCategories);
      })
  }, []);

  return (
    <ServiceContext.Provider value={service}>
      <clientContext.Provider value={client}>
        <TestimonialContext.Provider value={testimonials}>
          <JobContext.Provider value={jobs}>
            <CategoryContext.Provider value={categories}>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="services" element={<Services />} />
                    <Route path="services/:id" element={<ServicesDetail />} />
                    <Route path="recent-jobs" element={<RecentJob />} />
                    <Route path="recent-jobs/:id" element={<RecentJobDetail />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </CategoryContext.Provider>
          </JobContext.Provider>
        </TestimonialContext.Provider>
      </clientContext.Provider>
    </ServiceContext.Provider>

  );
}

export default App;