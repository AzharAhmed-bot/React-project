import React, { useEffect } from "react";
import Logo from "../assets/logo.png";
import "../Styles/CustomNavbar.css"

const CustomNavbar = () => {
    useEffect(() => {
        const menuBar = document.getElementById("menuBar");
        const menu = document.getElementById("menu");
        
        menuBar.addEventListener("click", () => {
            console.log("clicked");
            menu.classList.toggle("active");
        });

        return () => {
            menuBar.removeEventListener("click", () => {
                menu.classList.toggle("active");
            });
        };
    }, []);

    return (
        <nav className="CustomNavbar">
            <div>
                <a href="/"><img className="logo-image" src={Logo} alt="Logo"/></a>
            </div>
            <ul className="menu" id="menu">                
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/faq">FAQs</a></li>
            </ul>
            <button className="login-button"><a href="/login"><span>Login</span></a></button>
            <div className="menuBar" id="menuBar">☰</div>
        </nav>
    );
};

export default CustomNavbar;
