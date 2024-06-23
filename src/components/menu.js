import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Testimonials from '../pages/Testimonials';
import ContactUs from '../pages/ContactUs';
import $ from 'jquery';

function Menu() {

    const toggleMenu = () => {
        //alert("hi");

       
        $('nav').slideToggle();

      };

    return (
        <Router>
            <div className="mainMenu">

                <div class="menu-icon" id="menu-icon" onClick={toggleMenu}> &#9776; </div>
                <div className="logo"></div>

                <div class="menuBorder"></div>
                <nav>
 
                    <ul className="menu">
                        <li>
                            <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : '')}>Testimonials</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? 'active' : '')}>Contact Us</NavLink>
                        </li>
                    </ul>
                </nav>
                

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/testimonials" element={<Testimonials />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Menu;
