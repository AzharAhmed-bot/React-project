import React from "react";
import Story from "../assets/Story.png";
import Why from "../assets/Why.png";
import Kristina from "../assets/Kristina.jpg";
import Danni from "../assets/Danni.jpg";
import Azhar from "../assets/Azhar.jpg";
import Tracy from "../assets/Tracy.jpg";
import Ndanu from "../assets/Ndanu.jpg";
import Video from "../components/VideoComponent"
import CustomNavbar from "../components/CustomNavbar";



function about() {
    return(
        <div className="about">
        <CustomNavbar />
        <section className="about-section">
            <h1>About Us</h1>
    
            <div className="section-content">
                <h2>OUR STORY</h2>
                <div className="text-image-cont">
                    <div className="images">
                        <img src={Story} alt="Our Story Image"/>
                    </div>
                    <div className="text">
                        <h3>WHAT WE DO</h3>
                        <p>KonnectMe is more than just a website; it's a thriving community of mentors and mentees dedicated to mutual growth and success. The website connects aspiring tech professionals with experienced mentors fostering a supportive community for knowledge sharing, career development, and industry growth. The platform also facilitates communication and collaboration between mentors and mentees as well as offers resources specifically designed to support young professionals in the tech industry.</p>
                    </div>
                </div>
            </div>
    
            <div className="section-content">
                <h2>WHY WE DO IT</h2>
                <div className="text-image-cont">
                    <div className="images">
                        <img src={Why} alt="Why We Do It Image"/>
                    </div>
                    <div className="text">
                        <h3>WHY WE DO IT</h3>
                        <p>We at KonnectMe were born from a simple observation: the tech industry is brimming with talented young professionals, but many lack access to the guidance and support they need to truly thrive. We believe in the power of mentorship to accelerate careers, unlock potential, and shape the future of the tech industry. There is a gap in the current landscape where young professionals lack access to industry-specific guidance. We are also passionate about fostering innovation and progress within the tech industry and empowering the next generation of tech leaders by providing them with the support and resources they need to succeed.</p>
                    </div>
                </div>
            </div>
    
            <div className="section-content">
                <h2>HOW WE DO IT</h2>
                <div className="text-image-cont">
                    <div className="images">
                        <Video videoSrc="../assets/aboutvideo.mp4"/>
                    </div>
                    <div className="text">
                        <h3>HOW WE DO IT</h3>
                        <p>KonnectMe offers a user-friendly platform for mentor and mentee sign-up with clear profiles and matching algorithms to ensure that mentees are matched with a suitable mentor. We also provide a secure messaging system for communication between mentors and mentees. Valuable resources such as articles, guides, and workshops for mentees are also provided for extra reference on industry insights. We showcase successful mentor-mentee pairings and share inspiring stories on our website to show all the upcoming techies that they can do it too!</p>
                    </div>
                </div>
            </div>
    
            <h2>MEET THE TEAM</h2>
            <div className="team-section">
                <div className="team-member">
                 <img src={Ndanu} alt="Laureen Ndanu"/>
                    <h3>Laureen Ndanu</h3>
                    <p>Chief Executive Officer</p>
                </div>
                <div className="team-member">
                    <img src={Kristina} alt="Kristina Kemoi"/>
                    <h3>Kristina Kemoi</h3>
                    <p>Chief Operations Officer</p>
                </div>
                <div className="team-member">
                    <img src={Azhar} alt="Azhar Ahmed"/>
                    <h3>Azhar Ahmed</h3>
                    <p>Chief Technology Officer</p>
                </div>
                <div className="team-member">
                    <img src={Tracy} alt="Tracy Mugure"/>
                    <h3>Tracy Mugure</h3>
                    <p>Chief Marketing Officer</p>
                </div>
                <div className="team-member">
                    <img src={Danni} alt="Danni Podho"/>
                    <h3>Danni Podho</h3>
                    <p>Chief Financial Officer</p>
                </div>
            </div>        
        </section>
    
    </div>

    
    )
}
export default about;