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
import OurTerms from './components/pages/TermsAndConditions';
import { PageLoader } from './components/cards/utilities/loader';
import Careers from './components/pages/Careers';
import JobOpeningDetail from './components/detailedPages/jobOpeningDetail';


// Contexts
export const ServiceContext = createContext(null)
export const CompanyInfoContext = createContext(null)
export const JobContext = createContext(null)
export const CategoryContext = createContext(null)
export const ClientContext = createContext(null)
export const CoreValuesContext = createContext(null)
export const TechContext = createContext(null)
export const IndustryContext = createContext(null)
export const WorkProcessContext = createContext(null)
export const TeamContext = createContext(null)
export const TestimonialContext = createContext(null)
export const JobOpeningContext = createContext(null)


function App() {
  const [service, setService] = useState([]);
  const [companyInfo, setCompanyInfor] = useState([])
  const [jobs, setJobs] = useState([])
  const [categories, setCategories] = useState([]);
  const [client, setClient] = useState([])
  const [coreValue, setCorevalue] = useState([])
  const [tech, setTech] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [workProcess, setWorkProcess] = useState([]);
  const [ourTeam, setOurTeam] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [jobOpenings, setJobOpenings] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get(`${process.env.REACT_APP_API_URL}/testimonials`),
      axios.get(`${process.env.REACT_APP_API_URL}/our-teams`),
      axios.get(`${process.env.REACT_APP_API_URL}/work-process`),
      axios.get(`${process.env.REACT_APP_API_URL}/industries`),
      axios.get(`${process.env.REACT_APP_API_URL}/technologies`),
      axios.get(`${process.env.REACT_APP_API_URL}/core-values`),
      axios.get(`${process.env.REACT_APP_API_URL}/clients`),
      axios.get(`${process.env.REACT_APP_API_URL}/our-services`),
      axios.get(`${process.env.REACT_APP_API_URL}/company-info/1`),
      axios.get(`${process.env.REACT_APP_API_URL}/our-recent-jobs`),
      axios.get(`${process.env.REACT_APP_API_URL}/our-jobs`),
    ])
      .then((responses) => {
        setTestimonials(responses[0].data);
        setOurTeam(responses[1].data);
        setWorkProcess(responses[2].data);
        setIndustry(responses[3].data);
        setTech(responses[4].data);
        setCorevalue(responses[5].data);
        setClient(responses[6].data);
        setService(responses[7].data);
        setCompanyInfor(responses[8].data);
        setJobs(responses[9].data);
        setJobOpenings(responses[10].data);

        const uniqueCategories = responses[9].data.reduce((categories, product) => {
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

        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <ServiceContext.Provider value={service}>
      <CompanyInfoContext.Provider value={companyInfo}>
        <JobContext.Provider value={jobs}>
          <CategoryContext.Provider value={categories}>
            <ClientContext.Provider value={client}>
              <CoreValuesContext.Provider value={coreValue}>
                <TechContext.Provider value={tech}>
                  <IndustryContext.Provider value={industry}>
                    <WorkProcessContext.Provider value={workProcess}>
                      <TeamContext.Provider value={ourTeam}>
                        <TestimonialContext.Provider value={testimonials}>
                          <JobOpeningContext.Provider value={jobOpenings}>
                            <BrowserRouter>
                              <ScrollToTop />
                              {loading ? <PageLoader /> : null}
                              <Routes>
                                <Route path="/" element={<Layout />}>
                                  <Route index element={<Home />} />
                                  <Route path="about" element={<About />} />
                                  <Route path="services" element={<Services />} />
                                  <Route path="services/:slug" element={<ServicesDetail />} />
                                  <Route path="recent-jobs" element={<RecentJob />} />
                                  <Route path="recent-jobs/:slug" element={<RecentJobDetail />} />
                                  <Route path="contact" element={<Contact />} />
                                  <Route path="privacy-policy" element={<Privacy />} />
                                  <Route path="return-policy" element={<OurReturnPolicy />} />
                                  <Route path="terms-and-conditions" element={<OurTerms />} />
                                  <Route path="careers" element={<Careers />} />
                                  <Route path="careers/:slug" element={<JobOpeningDetail />} />
                                </Route>

                                <Route path="*" element={<NoPage />} />
                              </Routes>
                            </BrowserRouter>
                          </JobOpeningContext.Provider>
                        </TestimonialContext.Provider>
                      </TeamContext.Provider>
                    </WorkProcessContext.Provider>
                  </IndustryContext.Provider>
                </TechContext.Provider>
              </CoreValuesContext.Provider>
            </ClientContext.Provider>
          </CategoryContext.Provider>
        </JobContext.Provider>
      </CompanyInfoContext.Provider>
    </ServiceContext.Provider >

  );
}

export default App;
