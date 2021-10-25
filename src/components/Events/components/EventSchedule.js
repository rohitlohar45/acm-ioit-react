import { useState } from "react";

const TabPanel = (id) => {
  return (
    <div className="tab-pane fade show active" id={`day-${id}`} role="tabpanel">
      <div className="event-content">
        <div className="single-event d-md-flex">
          <div className="event-image">
            <img src="https://i.ibb.co/nBWdDQL/ACM-Game-of-theory.jpg" alt="Event" />
          </div>
          <div className="event-content media-body">
            <h4 className="event-title">
              Web Design Principle and Best Practise {id}
            </h4>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              minima dolores rerum maiores qui at commodi quas, reprehenderit
              eius consectetur quae magni molestias veniam, provident illum
              facere iure libero asperiores!
            </p>
            <ul className="event-meta">
              <li>Start: 12.00 PM</li>
              <li>End: 15.00 PM</li>
              <li>Location: Hall 1 , Building A, Golden Street, Southafrica</li>
            </ul>
          </div>
        </div>

        <div className="single-event d-md-flex">
          <div className="event-image">
            <img src="https://i.ibb.co/nBWdDQL/ACM-Game-of-theory.jpg" alt="Event" />
          </div>
          <div className="event-content media-body">
            <h4 className="event-title">15 FREE PRODUCTIVE DESIGN TOOLS</h4>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              minima dolores rerum maiores qui at commodi quas, reprehenderit
              eius consectetur quae magni molestias veniam, provident illum
              facere iure libero asperiores!
            </p>
            <ul className="event-meta">
              <li>Start: 12.00 PM</li>
              <li>End: 15.00 PM</li>
              <li>Location: Hall 1 , Building A, Golden Street, Southafrica</li>
            </ul>
          </div>
        </div>

        <div className="single-event d-md-flex">
          <div className="event-image">
            <img src="https://i.ibb.co/nBWdDQL/ACM-Game-of-theory.jpg" alt="Event" />
          </div>
          <div className="event-content media-body">
            <h4 className="event-title">GETTING STARTED WITH SKETCHAPP</h4>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              minima dolores rerum maiores qui at commodi quas, reprehenderit
              eius consectetur quae magni molestias veniam, provident illum
              facere iure libero asperiores!
            </p>
            <ul className="event-meta">
              <li>Start: 12.00 PM</li>
              <li>End: 15.00 PM</li>
              <li>Location: Hall 1 , Building A, Golden Street, Southafrica</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventSchedule = (props) => {
  const [tabPanel, setTabPanel] = useState(() => TabPanel("all"));
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
            href="#0"
            className={`${active.taball} animated-button victoria-two`}
            id="day-all-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, "all")}
            role="tab"
            aria-controls="day-all"
          >
            <h4 className="nav-title">All</h4>
            <span>28 July, 2022</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#0"
            className={`${active.tab1} animated-button victoria-two`}
            id="day-1-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, 1)}
            role="tab"
            aria-controls="day-1"
          >
            <h4 className="nav-title">Day 1</h4>
            <span>28 July, 2022</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#0"
            className={`${active.tab2} animated-button victoria-two`}
            id="day-2-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, 2)}
            role="tab"
            aria-controls="day-2"
          >
            <h4 className="nav-title">Day 2</h4>
            <span>28 July, 2022</span>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#0"
            className={`${active.tab3} animated-button victoria-two`}
            id="day-3-tab"
            data-toggle="tab"
            onClick={(event) => handleDays(event, 3)}
            role="tab"
            aria-controls="day-3"
          >
            <h4 className="nav-title">Day 3</h4>
            <span>28 July, 2022</span>
          </a>
        </li>
      </ul>
    );
  };

  return (
    <>
      <div id="event" className="event-schedule mt-5">
        <div style={{ margin: "0px" }} className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">PAST-EVENTS</h2>
                <p className="text">
                  Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
                  vocent mediocritatem reiciendis odit sed, vero amet blanditiis
                  cule dicta iriure at phaedrum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="event-tab pb-5">
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
