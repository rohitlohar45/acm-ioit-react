import React, { useEffect } from 'react';
import './Team.css'
import Aditya from "../../assets/team/Aditya.jpg";
import TeamCard2 from './TeamCard2';
import TeamCard3 from './TeamCard3';
import 'bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Team = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div className="team-body">
                {/* <h1 className="ourTeam">Our Team</h1> */}
                <p className="team mt-4">
                    <span className="ab">Ou</span>r Team
                </p>
                <TeamCard2 src={Aditya} name="Dr. Meenakshi Thalor" role="Faculty Guide" />

                <TeamCard3 aos="fade-up" easing="ease-in-out" />


            </div>
        </>
    )
};

export default Team;