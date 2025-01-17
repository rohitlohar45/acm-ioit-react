import React from 'react'
import { LinkedIn } from '@material-ui/icons'
import "./TeamCard2.css";

const TeamCard2 = ({ src, name, role }) => {
    return (
        <div className="team-container">
            <div className="image">
                <img src={src} alt="" height="250px" width="250px" />
            </div>
            <div className="info">
                <h3>{name}</h3>
                <span>{role}</span>
            </div>
            <div className="linkedin">
                <a href="https://in.linkedin.com/in/meenakshi-thalor-03937840"><LinkedIn /></a>
            </div>
        </div>
    )
}

export default TeamCard2
