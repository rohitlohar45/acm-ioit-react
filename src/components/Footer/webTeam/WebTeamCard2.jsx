import React from "react";
import teams from "./TeamData";
import { LinkedIn } from "@material-ui/icons";
import "./WebTeamCard2.css";

const WebTeamCard2 = ({ aos, easing }) => {
  return (
    <div className="teams-body">
      {teams.map((team) => {
        return (
          <div
            data-aos={aos}
            data-aos-easing={easing}
            key={team.id}
            className="team-container"
          >
            <div className="image">
              <img src={team.image} alt="team" />
            </div>
            <div className="info">
              <h3>{team.name}</h3>
              <span>{team.role}</span>
            </div>
            <div className="linkedin">
              <a href={team.linkedinURL}>
                <LinkedIn />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WebTeamCard2;
