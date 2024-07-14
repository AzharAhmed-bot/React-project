import React from "react";
import Header from "../components/Header";
import Connection from "../assets/connection.jpg"
import Person1 from "../assets/person1.jpg"
import Strath from "../assets/strath.png"
import Mentor from "../assets/mentor.png"
import Mentee from "../assets/mentee.jpg"
import Google from "../assets/google.png"
import "../Styles/profile.css"

const profile = () => {
    return (
            <>
            <Header />
            <div className="profile">
           < div className="profile-container">
            <img className="profile-background" src={Connection} alt=""/>
            <img className="profile-picture" src={Person1} alt=""/>
            <div className="profile-info">
                <h1>John Doe</h1>
                <h2>Software Engineer mentor</h2>
                <p>Chicago, USA </p>
                <p>Software Engineer | Mentor | Lecturer</p>
                <ul className="contact-info">
                    <li><a href="#"><i className="fas fa-envelope"></i>johndoe@gmail.com</a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i> My profile </a></li>
                </ul>
                <span>400 connections</span>
                <button className="button">
                    Open to
                    <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                      <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        
        <div className="experience-container">
            <h2>Experience</h2>
            <div className="experience-item">
                <h3>Mentor</h3>
                <p className="experience-details">MentorMe, Chicago | January 2010 - Present</p>
                <p>As a mentor at Company Name, I have guided and supported junior team members, providing them with valuable insights, advice, and feedback to help them grow in their roles. My role involves developing personalized learning plans, conducting regular check-ins, and fostering a collaborative and supportive environment for learning and development.</p>
            </div>
        </div>   
        <div className="education-container">
            <h2>Education</h2>
            <div className="education-info">
                <img className="education-picture" src={Strath} alt=""/>
                <div className="education-details">
                    <p className="institution">Strathmore University</p>
                    <p className="degree">Masters in Computer Science</p>
                    <p className="duration">June 2005 - June 2007</p>
                </div>
            </div>
        </div>
        
        </div>
        <div className="feed-card">
            <img className="feed-pic" src={Mentor} alt="Mentor"/>
            <div className="feed-text">
                <p>Mentor me</p>
                <span>Company for mentors</span>
                <button className="follow-button">Follow+</button>
            </div>

            <img className="feed-pic" src={Mentee} alt="Mentor"/>
            <div className="feed-text">
                <p>Mentee me</p>
                <span>Company for mentees</span>
                <button className="follow-button">Follow+</button>
            </div>
            <img className="feed-pic" src={Google} alt="Mentor"/>
            <div className="feed-text">
                <p>Google</p>
                <span>Trainers for mentors</span>
                <button className="follow-button">Follow+</button>
            </div>
            <img className="feed-pic" src={Strath}alt="Mentor"/>
            <div className="feed-text">
                <p>Strathmore University</p>
                <span>Maisa program</span>
                <button className="follow-button">Follow+</button>
            </div>
        </div>
        </div>
        </>



    )
}
export default profile;