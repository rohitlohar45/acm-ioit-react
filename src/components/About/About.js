import React from 'react';
import Fade from 'react-reveal/Fade'

import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css';

import img from "../../assets/about/acm.svg"
import img1 from "../../assets/about/svg3.svg"
import img2 from "../../assets/about/svg2.svg"


const About1 = () => {
    return (
        <div className="about-body">
            <div className="bg"></div>
            <p className="about mt-4">
                <span className="ab">Ab</span>out
            </p>
            <div className="sections py-md-5 py-sm-1">
                <Fade bottom>
                    <div className="section section1 py-md-5 px-md-4">
                        <div className=" image1 image d-flex align-items-center justify-content-center">
                            <img src={img} alt="ACM" />
                        </div>
                        <div className="line line1">
                        </div>
                        <div className="content text-justify p-2">
                        <h2 className="heading text-blue">ACM</h2>
                            <p>
                                The Association for Computing Machinery is an international 
                                learned society for computing. It was founded in 1947 and is the world's 
                                largest scientific and educational computing society. ACM is a non-profit professional 
                                membership group, claiming nearly 100,000 student and professional members as of 2019.
                                ACM has fostered growth in the computing community through its more than 180 professional 
                                and more than 680 student chapters worldwide.
                            </p>
                        </div>
                    </div>  
                </Fade> <br class="line-break"/>
                <Fade bottom>
                    <div className="section section2 py-md-5 px-md-4">
                        <div className="image image1 d-flex align-items-center justify-content-center pe-3">
                            <img src={img1} alt="ACM IOIT" style={{height:'100%', width:'100%'}} />
                        </div>
                        <div className="line line1">
                        </div>
                        <div className="content text-justify p-2">
                            <h2 className="heading text-blue">ACM IOIT Student Chapter</h2>
                            <p>
                            ACM IOIT Student Chapter was founded on 2019, with a vision to carry forward ACM’s 
                            international intentions on a root level at AISSMS’ Institute of Information Technology. 
                            The motive behind starting this Student Chapter was to instil an intrigue and passion for 
                            learning and innovation in technology, among students.
                            </p>
                        </div>
                    </div>  
                </Fade> <br class="line-break"/>
                <Fade bottom>
                    <div className="section section3 py-md-5 px-md-4">
                        <div className="image image1 d-flex align-items-center justify-content-center">
                            <img src={img2} alt="ACM" style={{height:'100%', width:'100%'}}/>
                        </div>
                        <div className="line line1">
                        </div>
                        <div className="content text-justify p-2 px-md-5">
                            <h2 className="heading text-blue">More About College</h2>
                            <p>
                            Located at the heart of Pune city, AISSMS IOIT was established in August 1999. 
                        The college has been a prime engineering institute of the city for the past decade. 
                        With good infrastructural facilities, the institute has enhanced the teaching-learning 
                        experience by providing students greater resources, contact with industries and academia,
                         employment opportunities and internships, etc.
                            </p>
                        </div>
                    </div>  
                </Fade>
                {/* <div className="section section2">
                    <div className="content d-flex align-items-center text-justify border-top p-2">
                        <p>
                        ACM IOIT Student Chapter was founded on 2019, with a vision to carry forward ACM’s 
                        international intentions on a root level at AISSMS’ Institute of Information Technology. 
                        The motive behind starting this Student Chapter was to instil an intrigue and passion for 
                        learning and innovation in technology, among students. Our Chapter focuses on enhancing 
                        and boosting every student’s technical fervour by frequently organizing various events 
                        throughout the year like Technical Workshops, Competitions, Eminent Speaker Programs, and 
                        Discussions with the chapter members. We are striving to be an efficient platform for 
                        students at an undergraduate level for learning new skills and putting those skills to 
                        good use.
                        </p>
                    </div>
                    <div className="image image1 d-flex align-items-center justify-content-center">
                        <div className="underline" style={{marginLeft:'1rem', height:'14rem'}}></div>
                        <p className="head">ACM IOIT</p>
                    </div>
                </div>
                <br/>
                <div className="section section1">
                    <div className="image image1 d-flex align-items-center justify-content-center" style={{paddingRight:'20px'}}>
                        <p style={{fontSize:'4rem', lineHeight:'3.5rem', textAlign:'right'}} className="head">More About College</p>
                        <div className="underline" style={{height:'11rem'}}></div>
                    </div>
                    <div className="line ">
                    </div>
                    <div className="content text-justify p-2 border-top last-section">
                        <p>
                        Located at the heart of Pune city, AISSMS IOIT was established in August 1999. 
                        The college has been a prime engineering institute of the city for the past decade. 
                        With good infrastructural facilities, the institute has enhanced the teaching-learning 
                        experience by providing students greater resources, contact with industries and academia,
                         employment opportunities and internships, etc. It is the mission of the college to 
                         empower the society through dynamic education
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default About1
