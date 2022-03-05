import React, { useState } from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import WebTeamCard2 from "./webTeam/WebTeamCard2";
import { NavLink } from "react-router-dom";


Modal.setAppElement("#root");
const Footer = () => {
  const textStyle = {
    fontWeight: "bold"
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <footer>
        <Container>
          <div className="sec about__sec">
            <h2>About ACM</h2>
            <p style={textStyle}>
              ACM IOIT Student Chapter was founded on 2019, with a vision to
              carry forward ACM’s international intentions on a grass root level
              at AISSMS’ Institute of Information Technology.
            </p>

            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/ioit.acm">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ioit__acm/">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/IOIT_ACM">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ioit-acm">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span style={textStyle}>
                  AISSMS IOIT ACM Student Chapter. RB Motilal Kennedy Road, near
                  RTO, Sangamvadi, Pune-411001
                </span>
              </li>
              {/* <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
              </li> */}
              <li>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                <p>
                  <a style={textStyle} href="mailto:support@ioit.acm.org">
                    support@ioit.acm.org
                  </a>
                </p>
              </li>
            </ul>
          </div>

          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <NavLink to="/About" style={textStyle} >
                  About
                </NavLink>
                {/* <a style={textStyle} >
                  <NavLink to="/About">About</NavLink>
                </a> */}
              </li>
              <li>
                <NavLink to="/" style={textStyle} >
                  Home
                </NavLink>
              </li>
              <li>
                <a style={textStyle} href="https://dl.acm.org/">
                  ACM Digital Library
                </a>
              </li>
              <li>
                <NavLink to="/Membership" style={textStyle} >
                  Membership
                </NavLink>
              </li>
            </ul>
          </div>

          {/* <img src="http://localhost:3000/static/media/acm2.01084429.png" height="175px" width="175px"></img> */}
        </Container>
      </footer>

      <div className="afterFooter">
        <p className="footer-text">Developed by AISSMS IOIT ACM Student Chapter</p>


        <Button onClick={() => setModalIsOpen(true)}>WebTeam</Button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{
            padding: "-17px",
            background: "#002030",

            overlay: {
              zIndex: 98,
              backgroundColor: "grey",
            },
            content: {
              top: "2rem",
              height: "90vh",
              background: "#002030",
            },
          }}
        >
          <div className="webTeam-body">
            <h1>Our Web Team</h1>
            <WebTeamCard2 />
          </div>
          <Button
            style={{ float: "right", margin: "1rem", display: "block" }}
            onClick={() => setModalIsOpen(false)}
          >
            X
          </Button>
        </Modal>
      </div>
    </div>
  );
};

export default Footer;
