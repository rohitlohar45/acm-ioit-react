import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaTimes } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/all"
import MenuItems from "./MenuItems";
import "./Navbar.css";
// import acmLogo from '../../../assets/acm.png'
import { anime } from 'react-anime';
// import linker from '../GlobalVars';

const Navbar = (props) => {
  const [show, handleShow] = useState(false);

  const [click, setClick] = useState();

    const [click, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!click);
    };
    useEffect(() => {
        let logoTextAnimation = anime.timeline({
            loop: true,
            autoplay: true,
            direction: 'alternate',
            duration: 5000
        });
        logoTextAnimation
            .add({
                targets: '.logo-text',
                color: '#09FF00',
                easing: 'easeInOutCirc',
            })
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
    }, []);
    return (
        <nav className={`nav ${show && "nav_black"}`}>
            <div className="nav_center container">
                <a href="/">
                    <div className='logo-text'>
                        ACM IOIT
                    </div>
                </a>
                <ul className={click ? "nav_list active" : "nav_list"}>

                    {MenuItems.map(({ id, title, route, cName }) => (
                        <li key={id} className="nav_item">
                            <NavLink onClick={clickHandler} to={route} className={cName}>{title}</NavLink>
                            {/* For official deployment, uncomment below */}
                            {/* <NavLink to={`/${title}`} className={cName}>{title}</NavLink> */}
                        </li>
                    ))}
                </ul>

                <div className="hamburger_icon" onClick={clickHandler}>
                    {/* {click ? <FaTimes /> : <HiMenuAlt2 />} */}
                    {click ? <FaTimes /> : <RiMenu2Fill />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
