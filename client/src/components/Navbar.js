
import logo from "../images/logo1.png";
// import {Link}  from  "react-router-dom" ;
// import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'



import "./Navbar.css";
const Navbar = () => {
    return (
        <div class="hero">
        <nav>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
            <FontAwesomeIcon icon="fa-solid fa-bars" />
            </label>
            <label class="logo"><img style={{ width: 100, paddingTop:18 }} src={logo} alt="Logo du site" /></label>
            <ul>
                <li><a class="active" href="#HOME">HOME</a></li>
                <li><a href="#ABOUT">ABOUT ME</a></li>
                <li><a href="#SKILLS">SKILLS</a></li>
                <li><a href="#SERVICES">Services</a></li>
               <li><a href="#CONTACT" class="btn btn-success">Contact</a></li> 
            </ul>
        </nav>


        </div>

    );
}

export default Navbar;