import React from "react";
import { Button } from "react-bootstrap";

const style = {
  color: "white",
};

function UpcomingEvent(props) {
  return (
    <div>
      <div className="header">
        <h2>Upcoming-Events</h2>
      </div>
      <div className="event-body2">
        <div className="imgBox">
          <img src={props.link} alt="loading"></img>
          <imghover className="txt">
            <h2 style={style}>{props.title}</h2>
            <p style={style}>{props.descShort}</p>
          </imghover>
        </div>
        <div className="event">
          <p className="title">{props.title}</p>
          <p className="title" style={{ color: "#09bb00" }}>
            In association with Enterprise Building Training Solutions
            <br />
            by Mario Rozario
          </p>
          <p className="title">{props.date}</p>
          <p className="title">{props.timing}</p>
          <p className="event-info">{props.descLong}</p>
          {/* <Button size="lg" href={props.registerLink}>
            Register Now
          </Button> */}
          <button class="btn third">Register Now</button>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvent;
