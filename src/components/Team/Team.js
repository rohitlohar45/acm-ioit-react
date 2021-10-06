import React from 'react';
import './Team.css'
// import TeamCard from './TeamCard';
import adi from "../../assets/team/Adi.jpg";
import TeamCard2 from './TeamCard2';
import TeamCard3 from './TeamCard3';
const Team = () => {
    return (
        <>
            <div className="team-body">
                <h1>Our Team</h1>

                <TeamCard2 src={adi} name="Meenakshi Thalor" role="Faculty Guide" />

                <TeamCard3 />


            </div>
        </>
    )
};

export default Team;