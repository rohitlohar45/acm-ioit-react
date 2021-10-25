import React, { useState } from "react";

// import News from '../Dashboard/NewsFlash'

import Event from "./components/EventNew";
import UpcomingEvent from "./components/UpcomingEvent";
import EventDetail from "./EventDetail";
import Upcoming from "./Upcoming";
import EventSchedule from "./components/EventSchedule";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function createEvent(details) {
  return (
    <>
      <Event
        key={details.id}
        id={details.id}
        title={details.title}
        descLong={details.descLong}
        descShort={details.descShort}
        link={details.link}
        date={details.date}
        timing={details.timing}
      />
    </>
  );
}

function createUpcomingEvent(upcoming) {
  return (
    <>
      <UpcomingEvent
        key={upcoming.id}
        id={upcoming.id}
        title={upcoming.title}
        descLong={upcoming.descLong}
        descShort={upcoming.descShort}
        link={upcoming.link}
        date={upcoming.date}
        timing={upcoming.timing}
        registerLink={upcoming.registerLink}
      />
    </>
  );
}

const Events = () => {
  const settingsMobile = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const settingsDesktop = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const [slider, setSlider] = useState(
    window.screen.width < 800 ? (
      <Slider {...settingsMobile}>{EventDetail.map(createEvent)}</Slider>
    ) : (
      <Slider {...settingsDesktop}>{EventDetail.map(createEvent)}</Slider>
    )
  );

  const responsive = (media) => {
    if (media.matches)
      setSlider(
        <Slider {...settingsMobile}>{EventDetail.map(createEvent)}</Slider>
      );
    else
      setSlider(
        <Slider {...settingsDesktop}>{EventDetail.map(createEvent)}</Slider>
      );
  };

  const media = window.matchMedia("(max-width: 800px)");
  media.addEventListener("change", responsive);
  window.onload = () => responsive(media);

  return (
    <div>
      {Upcoming.map(createUpcomingEvent)}
      <EventSchedule />
      <div className="events-slider">
        {slider}
      </div>
    </div>
  );
};

export default Events;
