import React from "react";
import { useParams } from "react-router-dom";

import "../../../../node_modules/tailwindcss/dist/tailwind.min.css";
import "./EventPage.css";

import EventDetail from "../EventDetail";

const EventPage = () => {
  const { id } = useParams();
  const data = EventDetail[id - 1];
  const description = data.descLong.split(". ");
  return (
    <>
      <div className="py-24">
        <div className="event-heading">
          <svg xmlns="http://www.w3.org/2000/svg">
            <filter id="motion-blur-filter" filterUnits="userSpaceOnUse">
              <feGaussianBlur stdDeviation="100 0"></feGaussianBlur>
            </filter>
          </svg>
          <span filter-content="S">Event Details</span>
        </div>

        <div className="event-page container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-6">
            <div className="mb-12 lg:mb-0 xl:mr-14">
              <img className="inline" src={data.link} alt="alternative" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div>
              <h1 className="mb-6">{data.title}</h1>
              <ul className="list mb-7 space-y-2">
                {description.map((desc) => {
                  return desc === "" ? (
                    ""
                  ) : (
                    <li className="flex">
                      <i className="fas fa-chevron-right"></i>
                      <div>{desc}</div>
                    </li>
                  );
                })}
              </ul>
              <a
                className="btn-solid-reg popup-with-move-anim mr-1.5"
                href="#details-lightbox"
              >
                Register
              </a>
              <a className="btn-outline-reg" href="article.html">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
