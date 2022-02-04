import React from "react";
import { Button } from "react-bootstrap";
// import '../Events.css';
import './UpcomingEvent.css';


function UpcomingEvent(props) {
  return (
    <div className="bg-dark-blue light-border-bottom full-height">
      <div className="header">
        <h2>Upcoming-Events</h2>
      </div>
      <div className="event-body2">
        <div className="imgBox">
          <img src={props.link} alt="loading" style={{ height: '50%', width: '65%' }}></img>
          {/* <imghover className="txt">
            <h2 style={style}>{props.title}</h2>
            <p style={style}>{props.descShort}</p>
          </imghover> */}
        </div>
        <div className="event">
          <p className="title text-white">{props.title}</p>
          <p className="title" style={{ color: "#09bb00" }}>
            {props.descShort}
          </p>
          <p className="title text-white">{props.date}</p>
          <p className="title text-white">{props.timing}</p>
          <p className="event-info">{props.descLong}</p>
          <a href="https://rpsconsultingpvtltd.viewpage.co/Azure-GitHub-Workshop-AISSMS">
            <Button variant="primary" size="lg">Register Now</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvent;
