import { useState } from "react";

import "../Events.css";
import EventDesc from "../../Dashboard/Events/EventDesc";

const TabPanel = (id) => {
  if (id === "all") {
    return (
      <div
        className="tab-pane fade show active"
        id={`day-${id}`}
        role="tabpanel"
      >
        <div className="event-content">
          {EventDesc.map((event) => {
            return (
              <div className="single-event d-md-flex bg-card box-shadow">
                <div className="event-image">
                  <img src={event.link} alt="Event" />
                </div>
                <div className="event-content media-body">
                  <h4 className="event-title text-blue">{event.title}</h4>
                  <p className="text text-white">{event.descShort}</p>
                  <ul className="event-meta">
                    <li>{event.date}</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="tab-pane fade show active"
        id={`day-${id}`}
        role="tabpanel"
      >
        <div className="event-content">
          {EventDesc.map((event) => {
            return event.year === id ? (
              <div className="single-event d-md-flex bg-card box-shadow">
                <div className="event-image">
                  <img src={event.link} alt="Event" />
                </div>
                <div className="event-content media-body">
                  <h4 className="event-title text-blue">{event.title}</h4>
                  <p className="text text-white">{event.descShort}</p>
                  <ul className="event-meta">
                    <li>{event.date}</li>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      </div>
    );
  }
};

const EventSchedule = (props) => {
  const [tabPanel, setTabPanel] = useState(() => TabPanel("2021"));
  const [active, setActive] = useState({
    taball: "active-tab",
    tab1: "",
    tab2: "",
    tab3: "",
  });

  const handleDays = (event, id) => {
    setTabPanel(() => TabPanel(id));
    const activeChange = {};
    for (const [key, value] of Object.entries(active)) {
      if (key === `tab${id}`) activeChange[key] = "active-tab";
      else activeChange[key] = "";
    }
    setActive(activeChange);
  };

  const DaysFunc = () => {
    return (
      <ul
        className="nav days justify-content-between align-items-center"
        id="myTab"
        role="tablist"
      >
        <li className="nav-item">
          <a
            className={`${active.taball} animated-button victoria-two`}
            id="day-all-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, "all")}
            role="tab"
            aria-controls="day-all"
          >
            <h4 className="nav-title text-white">All</h4>
            {/* <span className="text-white">2019 - 2021</span> */}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`${active.tab1} animated-button victoria-two`}
            id="day-1-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, "2022")}
            role="tab"
            aria-controls="day-1"
          >
            <h4 className="nav-title text-white">2022</h4>
            {/* <span className="text-white">2021</span> */}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`${active.tab2} animated-button victoria-two`}
            id="day-2-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, "2021")}
            role="tab"
            aria-controls="day-2"
          >
            <h4 className="nav-title text-white">2021</h4>
            {/* <span className="text-white">28 July, 2022</span> */}
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`${active.tab3} animated-button victoria-two`}
            id="day-3-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, "2020")}
            role="tab"
            aria-controls="day-3"
          >
            <h4 className="nav-title text-white">2020</h4>
            {/* <span className="text-white">28 July, 2022</span> */}
          </a>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div id="event" className="event-schedule mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title text-blue">PAST-EVENTS</h2>
                {/* <p className="text">
                  Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
                  vocent mediocritatem reiciendis odit sed, vero amet blanditiis
                  cule dicta iriure at phaedrum.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="event-tab pb-5 border-none">
                <DaysFunc />
                <div className="tab-content" id="myTabContent">
                  {tabPanel}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSchedule;
