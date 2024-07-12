import React from "react";
import Header from "../components/Header";
import "../Styles/faq.css"

const faq =() =>{
    return (
        <div className="faq">
            <Header />
    <div className="faq-container">
        <div className="faq-items">
            <h2>Frequently Asked Questions</h2>
    
            <div className="faq-item">
                <h3 className="question">Question 1: How do I sign up as a mentor?</h3>
                <p className="answer">Answer: To sign up as a mentor, click on the "Sign Up" button on the homepage and select "Mentor". Fill out the required information and submit the form.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 2: Can I be both a mentor and a mentee?</h3>
                <p className="answer">Answer: Yes, you can sign up as both a mentor and a mentee using separate accounts.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 3: How do I find a mentor?</h3>
                <p className="answer">Answer: You can search for mentors based on your interests, skills, or industry. Use the search bar on the homepage to find mentors matching your criteria.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 4: Is there a fee for using the platform?</h3>
                <p className="answer">Answer: No, our platform is free to use for both mentors and mentees.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 5: How do I contact a mentor?</h3>
                <p className="answer">Answer: Once you find a mentor you're interested in, you can send them a message through our messaging system. Click on the mentor's profile and use the messaging feature to reach out.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 6: Can I schedule a meeting with my mentor?</h3>
                <p className="answer">Answer: Yes, you can schedule meetings with your mentor through our platform. Use the scheduling feature to coordinate meeting times that work for both of you.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 7: What should I discuss with my mentor?</h3>
                <p className="answer">Answer: You can discuss career goals, industry insights, skill development, challenges you're facing, and any other relevant topics related to your personal or professional growth.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 8: How often should I meet with my mentor?</h3>
                <p className="answer">Answer: The frequency of meetings with your mentor depends on your availability and the agreement you have with your mentor. Some mentors and mentees meet weekly, bi-weekly, or monthly.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 9: Can I change my mentor?</h3>
                <p className="answer">Answer: Yes, if you feel that your current mentor is not the right fit for you, you can request to change your mentor through our platform.</p>
            </div>
    
            <div className="faq-item">
                <h3 className="question">Question 10: What if I have a problem with my mentor?</h3>
                <p className="answer">Answer: If you encounter any issues or have concerns regarding your mentor, please reach out to our support team. We'll assist you in resolving the problem and finding a suitable solution.</p>
            </div>    
        </div>
    
        <div className="search-section">
            <h2>Find a Mentor</h2>
            <form className="search-form">
                <input type="text" placeholder="Search by interest, industry, or skill"/>
                <button type="submit">Search</button>
            </form>
        </div>
    </div>
    
        </div>
    )
}
export default faq;