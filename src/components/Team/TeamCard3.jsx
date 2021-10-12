import React from 'react'
import teams from './TeamData'
import { LinkedIn } from '@material-ui/icons'
import "./TeamCard3.css";

const TeamCard3 = () => {
    return (
        <div className="teams-body">
            {
                teams.map((team) => {
                    return (
                        <div key={team.id} className="team-container">
                            <div className="image">
                                <img src={team.image} alt="team" />
                            </div>
                            <div className="info">
                                <h3>{team.name}</h3>
                                <span>{team.role}</span>
                            </div>
                            <div className="linkedin">
                                <a href={team.linkedinURL}><LinkedIn /></a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TeamCard3
