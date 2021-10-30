import React from "react";
import "./AboutIOIT2.css";
import { NavLink } from "react-router-dom";
import AboutImage from "../../../assets/acm_nobg.png";

const AboutIOIT = () => {
  return (
    <>
      <div id="about" className="about-us section mt-5">
        <h6 className="aboutus">About Us</h6>
        <div style={{ margin: "0px" }} className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="left-image wow fadeInLeft about-img"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <img className="" src={AboutImage} alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 align-self-center wow fadeInRight"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="section-heading">
                <h2 style={{ fontWeight: "bold" }}>
                  Located at the <em>Heart of Pune City</em> AISSMS IOIT &amp;
                  was established in
                  <span> August 1999</span>
                </h2>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-4">
                  <div className="about-item">
                    <h4>50+</h4>
                    <h6>Activities</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="about-item">
                    <h4>20+</h4>
                    <h6>Expert Talks</h6>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-4">
                  <div className="about-item">
                    <h4>10+</h4>
                    <h6>Workshops</h6>
                  </div>
                </div>
              </div>
              <p style={{ fontWeight: "bold", textAlign: "justify" }}>
                <a
                  style={{ color: "#007bff" }}
                  rel="nofollow"
                  href="https://ioit.acm.org"
                  target="_parent"
                >
                  ACM IOIT
                </a>
                <br />
                The college has been a prime engineering institute of the city
                for the past decade. The institute not only offers courses in
                core-engineering branches but also in upcoming IT trends such as
                Machine Learning, Artificial Intelligence and Data Sciences.
                With good infrastructural facilities, the institute has enhanced
                the teaching-learning experience by providing students greater
                resources, contact with industries and academia, employment
                opportunities and internships, etc. Many entrepreneurs and
                researchers have also been produced by the institute. It is the
                mission of the college to empower the society through dynamic
                education.
              </p>
              <div className="main-green-button">
                <NavLink to="/About">More About Us</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIOIT;
