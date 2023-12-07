import React from "react";
import { useContext } from "react";
import Socials from "./socials";
import { Link } from "react-router-dom";
import { CompanyInfoContext } from "../../App";

const Footer = () => {
    const companyInfo = useContext(CompanyInfoContext);
    const dataCheck =
        !companyInfo.company_social || companyInfo.company_social.length === 0;

    const date = new Date();

    return (
        <div className="pt-8 text-white bg-primary">
            <div className="container pb-2">
                <div className="row g-3">
                    <div className="col-lg">
                        <h5 className="text-white">Company</h5>
                        <div className="list-group">
                            <Link
                                className="text-decoration-none text-white mb-1 text-hover"
                                to="/about"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                About Us
                            </Link>
                            <Link
                                className="text-decoration-none text-white mb-1 text-hover"
                                to="/services"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Services
                            </Link>
                            <Link
                                className="text-decoration-none text-white text-hover"
                                to="/recent-jobs"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Recent Jobs
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg">
                        <h5 className="text-white">Quick Links</h5>
                        <div className="list-group">
                            <Link
                                className="text-decoration-none text-white mb-1 text-hover"
                                to="/privacy-policy"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Privacy Policy
                            </Link>
                            <Link
                                className="text-decoration-none text-white mb-1 text-hover"
                                to="/return-policy"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Return Policy
                            </Link>
                            <Link
                                className="text-decoration-none text-white text-hover"
                                to="/terms-and-conditions"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Terms and Conditions
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg">
                        <h5 className="text-white">Start a Tech Career</h5>
                        <div className="list-group">
                            <Link
                                className="text-decoration-none text-white mb-1 text-hover"
                                to="#"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Our Courses
                            </Link>
                            <Link
                                className="text-decoration-none text-white mb-1 text-hover"
                                to="#"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Register
                            </Link>
                            <Link
                                className="text-decoration-none text-white text-hover"
                                to="#"
                            >
                                <i class="fa-solid fa-angles-right me-1"></i>
                                Log In
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg">
                        <h5 className="text-white">Get in Touch</h5>
                        <div class="mt-1 text-hover">
                            <a
                                href={`mailto:${companyInfo.email}`}
                                class="text-decoration-none text-white"
                            >
                                <span>
                                    <i class="fa-solid fa-envelope me-1"></i>
                                </span>
                                <p class="d-inline">{companyInfo.email}</p>
                            </a>
                        </div>
                        <div class="mt-1 text-hover">
                            <a
                                href={`tel:${companyInfo.telephone}`}
                                class="text-decoration-none text-white"
                            >
                                <p class="d-inline">
                                    <i class="fa-solid fa-phone-volume me-1"></i>
                                    {companyInfo.telephone}
                                </p>
                            </a>
                        </div>
                        <div class="mt-1 text-hover">
                            <i class="fa-solid fa-location-dot me-1"></i>
                            <p class="d-inline">
                                {companyInfo.company_address}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{ borderTop: "1px solid #fff" }}
                className="container-fluid"
            >
                {dataCheck ? null : (
                    <div className="d-flex justify-content-center mt-3">
                        <Socials
                            small={true}
                            socials={companyInfo.company_social}
                        />
                    </div>
                )}

                <div className="text-center pb-1">
                    <small>
                        &#169; {date.getFullYear()} Codehub Technologies. All
                        rights Reserved
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Footer;
