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
import Privacy from './components/pages/PrivacyPolicy';
import OurReturnPolicy from './components/pages/ReturnPolicy';


// Contexts
export const ServiceContext = createContext(null)
export const CompanyInfoContext = createContext(null)
export const JobContext = createContext(null)
export const CategoryContext = createContext(null)


function App() {
  const [service, setService] = useState([]);
  const [companyInfo, setCompanyInfor] = useState([])
  const [jobs, setJobs] = useState([])
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    //Service
    axios.get(`${process.env.REACT_APP_API_URL}/services`)
      .then(res => {
        setService(res.data)
      })

    // Company Info
    axios.get(`${process.env.REACT_APP_API_URL}/company-info/1`)
      .then(res => {
        setCompanyInfor(res.data)
      })

    // Recent Jobs
    axios.get(`${process.env.REACT_APP_API_URL}/recent-jobs`)
      .then(res => {
        setJobs(res.data)

        //Extract Unique categories
        const uniqueCategories = res.data.reduce((categories, product) => {
          const productCategories = product.category;
          productCategories.forEach(category => {
            const existingCategory = categories.find(c => c.name === category.name);
            if (!existingCategory) {
              categories.push(category);
            }
          });
          return categories;
        }, []);
        setCategories(uniqueCategories);
      })
  }, []);

  return (
    <ServiceContext.Provider value={service}>
      <CompanyInfoContext.Provider value={companyInfo}>
        <JobContext.Provider value={jobs}>
          <CategoryContext.Provider value={categories}>
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="about" element={<About />} />
                  <Route path="services" element={<Services />} />
                  <Route path="services/:slug" element={<ServicesDetail />} />
                  <Route path="recent-jobs" element={<RecentJob />} />
                  <Route path="recent-jobs/:slug" element={<RecentJobDetail />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<NoPage />} />
                  <Route path="privacy-policy" element={<Privacy />} />
                  <Route path="return-policy" element={<OurReturnPolicy />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </CategoryContext.Provider>
        </JobContext.Provider>
      </CompanyInfoContext.Provider>
    </ServiceContext.Provider >

  );
}

export default App;
