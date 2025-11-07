import React from "react";
import Faith from "../assets/Faith.png"
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Info() {
    return(
        <header>
            <img className="info-img" src={Faith} alt="Faith with glasses looking smiling to the camera with flowers at his side" />
            <h1 className="name">Faith Aucoin</h1>
            <h3 className="role">Frontend Developer</h3>
            <h4 className="info-website">Faithaucoin.website</h4>
            <div className="info-bnt-container">
                
                <a className="info-email bnt" target="_blank" href="#">
                    <MdEmail className="info-icon" />
                    Email
                </a>
                
                
                <a className="info-linkedin bnt" target="_blank" href="https://www.linkedin.com/in/faith-acuoin/" >
                    <FaLinkedin className="info-icon" />
                    LinkedIn
                </a>
            </div>
        </header>
    )
}