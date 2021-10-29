import React from 'react';
import Fade from 'react-reveal/Fade'

import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css';
import '../../App.css';

import img from "../../assets/about/acm.svg"
import img1 from "../../assets/about/svg3.svg"
import img2 from "../../assets/about/svg2.svg"


const About1 = () => {
    return (
        <div className="about-body bg-dark-blue">
            <div className="bg"></div>
            <p className="about mt-4">
                <span className="ab">Ab</span>out
            </p>
            <div className="sections py-md-5 py-sm-1">
                <Fade bottom>
                    <div className="section section1 py-md-5 px-md-4 blue-bg-card box-shadow">
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
                    <div className="section section2 py-md-5 px-md-4 blue-bg-card box-shadow">
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
                    <div className="section section3 py-md-5 px-md-4 blue-bg-card box-shadow">
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
            </div>
        </div>
    )
}

export default About1
