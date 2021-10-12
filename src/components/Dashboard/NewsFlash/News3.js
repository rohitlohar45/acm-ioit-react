import React from "react";
// import "./owl";
import "./News3.css";
import "../AboutIOIT/AboutIOIT2.css";
import "../AboutIOIT/Animation";
import Data from "../Events/EventDesc";

const News = () => {
  return (
    <>
      <h6 className="upcoming-event">Our Upcoming Events</h6>
      <h2 className="my-4" style={{ fontSize: "20px", textAlign: "center" }}>
        Discover What We Do &amp; <span>Offer</span> To Our
        <em> Students</em>
      </h2>
      <div id="features" className="features section">
        <div style={{ margin: "0px", padding: "0px" }} className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="features-content">
                <div className="row">
                  {Data.map((data) => {
                    return (
                      <div key={data.id} className="col-lg-3">
                        <div
                          className={`features-item ${data.feature}-feature wow fadeInUp`}
                          data-wow-duration="1s"
                          data-wow-delay="0s"
                        >
                          <div className={`${data.feature}-number number`}>
                            <h6>0{data.id}</h6>
                          </div>
                          <img src={data.link} alt="" />
                          <h4>{data.title}</h4>
                          <div className="line-dec"></div>
                          <p>{data.descShort}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="events" className="our-events section">
        <div style={{ margin: "0px", padding: "0px" }} className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div
                className="section-heading wow bounceIn"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <h6 style={{ fontWeight: "bold", fontSize: "30px" }}>
                  Our Past Events
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {Data.map((data) => {
              return (
                <div key={data.id} className="col-lg-4">
                  <div
                    className="event-item wow bounceInUp"
                    data-wow-duration="1s"
                    data-wow-delay="0.3s"
                  >
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="icon">
                          <img src={data.link} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="right-content">
                          <h4>{data.title}</h4>
                          <p>{data.descShort}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
};

export default News;
