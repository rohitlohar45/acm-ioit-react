import React from 'react';
import Fade from 'react-reveal/Fade'
import "./Membership.css"
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import mem from "../../assets/membership/discounts1.svg"
import mem1 from "../../assets/membership/knowledge.svg"
import mem2 from "../../assets/membership/learning.svg"
import mem3 from "../../assets/membership/innovate.svg"
import mem4 from "../../assets/membership/connections.svg"
import mem5 from "../../assets/membership/newsletter.svg"

const Membership = () => {
    return (
        <div>
            <div className="membership-body bg-dark-blue">
                {/* <div className="bg"></div> */}
                <p className="member">
                    <span className="ab">Mem</span>bership
                </p>
                <div className="sections py-5"> 
                    <Fade top>
                        <div className="section section1 py-5 px-4 blue-bg-card">
                            <div className="line line1">
                            </div>
                            <div className="content text-justify p-2">
                                <div className="newp">
                                    <h2 className="heading text-blue new-line">Why Join Us?</h2>
                                </div>
                                <p>
                                    ACM offers the resources, access and tools to invent the future. No one has a larger global network of professional peers.
                                    No one has more exclusive content. No one presents more forward-looking events. Or confers more prestigious awards. Or provides
                                    a more comprehensive learning center.
                                </p>
                            </div>
                        </div>
                    </Fade> <br />

                </div>
            </div>
            <div className="cards1 bg-dark-blue">
                <div className="containerofmembership">
                    <Fade bottom>
                        <div className="cardm box-shadow">
                            <div className="imgboxm blue-bg-card" data-text="Innovate">
                                <img src={mem3} alt="" />
                                <p className="text-blue pt-2 card-title">Innovate</p>
                            </div>
                            <div className="contentcard">
                                <h3>Innovate</h3>
                                <p>Access to resources for lifelong learning, including online courses,popular certifications and much more</p>
                            </div>
                        </div>
                        <div className="cardm box-shadow">
                            <div className="imgboxm blue-bg-card">
                                <img src={mem1} alt="" srcset="" />
                                <p className="text-blue pt-2 card-title">Knowledge</p>
                            </div>
                            <div className="contentcard">
                                <h3>Acquire Knowledge</h3>
                                <p>Insightful webinars on hot topics presented by today’s innovators.</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="cardm box-shadow">
                            <div className="imgboxm blue-bg-card">
                                <img src={mem2} alt="" srcset="" />
                                <p className="text-blue pt-2 card-title">Learning</p>
                            </div>
                            <div className="contentcard">
                                <h3>Lifelong Learning</h3>
                                <p>Ability to search DL, access bibliographic citations, view article abstracts.</p>
                            </div>
                        </div>
                        <div className="cardm box-shadow">
                            <div className="imgboxm blue-bg-card">
                                <img src={mem} alt="" srcset="" />
                                <p className="text-blue pt-2 card-title">Discounts</p>
                            </div>
                            <div className="contentcard">
                                <h3>Exclusive Discounts</h3>
                                <p>Special subscription pricing on ACM Books series,journals and conferences.</p>
                            </div>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="cardm box-shadow">
                            <div className="imgboxm blue-bg-card">
                                <img src={mem4} alt="" srcset="" />
                                <p className="text-blue pt-2 card-title">Connections</p>
                            </div>
                            <div className="contentcard">
                                <h3 id="h3id">Establish Connections</h3>
                                <p>Connect with various industrial connoissuers and techies.</p>
                            </div>
                        </div>
                        <div className="cardm box-shadow">
                            <div className="imgboxm blue-bg-card">
                                <img src={mem5} alt="" srcset="" />
                                <p className="text-blue pt-2 card-title">Newsletter</p>
                            </div>
                            <div className="contentcard">
                                <h3 className="card6">Tri-weekly Newsletter</h3>
                                <p>TechNews subscription (ACM’s tri-weekly email IT news digest)</p>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Membership
