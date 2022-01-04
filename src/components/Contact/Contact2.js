import React, { useEffect, useState, useRef } from "react";
import lottie from "lottie-web";

import "./Contact2.css";
import Mapbox from "./Mapbox";
const Contact = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./Blogging.json"),
    });
  }, []);

  const [user, setUser] = useState({
    username: "",
    mail: "",
    phone: "",
    msg: "",
  });

  const handleSubmit = (e) => {
    // e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  //   const handleSubmitForm = (event) => {
  //     // console.log(event);
  //     event.preventDefault();
  //   };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const { username, mail, phone, msg } = user;
    const contactError = document.getElementById("contact_error");
    const successMessage = document.getElementById("success_msg");

    if (
      username.length === 0 ||
      mail.length === 0 ||
      phone.length === 0 ||
      msg.length === 0
    ) {
      contactError.classList.remove("d-none");
    } else {
      const response = await fetch(
        "https://acm-ioit-web-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            mail: mail,
            phone: phone,
            msg: msg,
          }),
        }
      );
      
      contactError.classList.add("d-none");
      successMessage.classList.remove("d-none");
      setUser({
        username: "",
        mail: "",
        phone: "",
        msg: "",
      });
    }
  };

  return (
    <div className="contact-body">
      <div className="container-svg" ref={container}></div>
      <div className="contact-us">CONTACT US</div>
      <div className="contact-card">
        <div id="contact-head">GET IN TOUCH</div>

        <form className="contact-form" onSubmit={handleSubmitForm}>
          <div id="contact_error" className="d-none text-danger mb-5">
            Please Enter Valid Data
          </div>
          <div id="success_msg" className="d-none text-success mb-5">
            Thank you for contacting us! <br /> We will reach out to you soon.
          </div>
          <div className="txt-field">
            <input
              type="text"
              autoComplete="off"
              value={user.username}
              name="username"
              id="username"
              onChange={handleSubmit}
            />
            <span></span>
            <label htmlFor="username">Name</label>
          </div>
          <div className="txt-field">
            <input
              type="text"
              autoComplete="off"
              value={user.mail}
              name="mail"
              id="mail"
              onChange={handleSubmit}
            />
            <span></span>
            <label htmlFor="mail">E-mail</label>
          </div>
          <div className="txt-field">
            <input
              type="text"
              autoComplete="off"
              value={user.phone}
              name="phone"
              id="phone"
              onChange={handleSubmit}
            />
            <span></span>
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="txt-field">
            <input
              type="text"
              autoComplete="off"
              value={user.msg}
              name="msg"
              id="msg"
              onChange={handleSubmit}
            />
            <span></span>
            <label htmlFor="msg">Message </label>
          </div>
          {/* <button type ='submit'>SEND</button> */}
          <button type="submit" className="cta">
            <span className="hover-underline-animation"> SEND </span>
            <svg
              viewBox="0 0 46 16"
              height="10"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              id="arrow-horizontal"
              fill="#fff"
            >
              <path
                transform="translate(30)"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                data-name="Path 10"
                id="Path_10"
                fill="#fff"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div className="map-box">
        <Mapbox />
      </div>

      <div className="contact-footer">
        <div className="bottom-info">
          <div className="phone bottom-info-card">
            <div className="bottom-info-head">
              <i className="far fa-envelope"></i>
              PHONE
            </div>

            <div>Phone 123456789</div>
            <div>Phone 123456789</div>
          </div>
          {/* <div className='line'></div> */}
          <div className="add bottom-info-card">
            <div className="bottom-info-head">
              <i className="fas fa-map-marker-alt"></i>
              ADDRESS
            </div>

            <div>
              AISSMS IOIT ACM Student Chapter.
              <br /> RB Motilal Kennedy Road, near RTO, Sangamvadi,
              <br /> Pune-411001
            </div>
          </div>
        </div>
        <div className="social">
          <div>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook-f"></i>
          </div>
          Follow us
        </div>
      </div>
    </div>
  );
};

export default Contact;
